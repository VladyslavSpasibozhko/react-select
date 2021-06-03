import React, { useEffect, useRef, useState } from 'react';
import FieldWrapper from './FieldWrapper';
import ListWrapper from './ListWrapper';

import { ISelect } from '../interfaces/global';
import './index.css';

export const SelectContext = React.createContext<Partial<ISelect.SelectContextType>>({});

const Select: React.FC<ISelect.SelectPropsType> = ({
  closeOutsideClick = true,
  openMenuOnFocus = true,
  closeMenuOnBlur = false,
  values = [],
  customFilterHandler,
  returnFilterHandler,
  loadMoreRows,
  onSelect
}) => {
  const selectRef = useRef<HTMLDivElement>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [options, setOptions] = useState<ISelect.OptionType[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<ISelect.OptionType[]>([]);

  const handleOpen = () => setIsOpened(!isOpened);

  const handleFocus = () => {
    setIsFocused(true);

    if (openMenuOnFocus) setIsOpened(true);
  };

  const handleBlur = () => {
    setIsFocused(false);

    if (closeMenuOnBlur) setIsOpened(false);
  };

  const handleOutClick = (event: MouseEvent) => {
    const clickTarget = event.target as HTMLElement;

    if (!selectRef.current?.contains(clickTarget)) setIsOpened(false);
  };

  const handleFilter = (value: string) => {
    if (customFilterHandler) {
      const filteredOptions = customFilterHandler(value);

      return setOptions(filteredOptions);
    }

    const filteredOptions = values.filter(option => {
      const isNumber = typeof option.value === 'number';
      const isString = typeof option.value === 'string';

      if (isNumber) {
        const optionValue = option.value as number;

        return optionValue.toString().startsWith(value);
      }

      if (isString) {
        const optionValue = option.value as string;

        return optionValue.startsWith(value);
      }
    });

    if (returnFilterHandler) returnFilterHandler(filteredOptions);

    setOptions(filteredOptions);
  };

  const handleSelect = (option: ISelect.OptionType) => {
    const isSelected = !!selectedOptions.find(selectedOption => selectedOption.id === option.id);

    const newSelectedOptions = isSelected
      ? selectedOptions.filter(selectedOption => selectedOption.id !== option.id)
      : [...selectedOptions, option];

    setSelectedOptions(newSelectedOptions);

    onSelect?.(option, newSelectedOptions);
  };

  useEffect(() => {
    setOptions(values);
  }, [values]);

  useEffect(() => {
    if (closeOutsideClick) document.addEventListener('click', handleOutClick);

    return () => document.removeEventListener('click', handleOutClick);
  }, [closeOutsideClick, isOpened]);

  return (
    <SelectContext.Provider
      value={{
        isFocused,
        isOpened,
        options,
        selectedOptions,
        handleOpen,
        handleBlur,
        handleFocus,
        handleFilter,
        handleSelect,
        loadMoreRows
      }}
    >
      <div className={'select'} ref={selectRef}>
        <FieldWrapper />
        <ListWrapper />
      </div>
    </SelectContext.Provider>
  );
};

export default Select;
