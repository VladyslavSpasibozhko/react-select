import { CSSProperties, ReactNode } from 'react';

export namespace ISelect {
  export type SelectContextType = {
    isFocused: boolean;
    isOpened: boolean;
    options: OptionType[];
    selectedOptions: OptionType[];
    handleFocus: () => void;
    handleBlur: () => void;
    handleOpen: () => void;
    handleFilter: HandleFilterType;
    handleSelect: HandleSelectType;
    loadMoreRows: LoadMoreRowstype;
  };

  export type SelectPropsType = {
    closeOutsideClick?: boolean;
    openMenuOnFocus?: boolean;
    closeMenuOnBlur?: boolean;
    values?: OptionType[];

    // Handler will be fire when user typing, get input value as a params
    customFilterHandler?: CustomFilterHandlertype;
    // Handler get array of filtered options ( use default filtered method)
    returnFilterHandler?: ReturnFilterHandlertype;
    // Handler get array of select options, trigger always when was click to options
    onSelect?: HandleSelectType;
    // Handler will be called when scroll position in bottom of the wrapper
    loadMoreRows: LoadMoreRowstype;

    components?: ComponentsType;
  };

  export type OptionPropsType = OptionType & {
    style?: CSSProperties;
    handleSelect: HandleSelectType;
    isSelected?: boolean;
  };

  export type OptionType = {
    id: string | number;
    value: string | number;
  };

  // Events
  export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

  // Handlers
  export type HandleSelectType = (option: OptionType, options: OptionType[]) => void;
  export type HandleSelectSingleType = (option: OptionType, options?: OptionType[]) => void;
  export type HandleFilterType = (value: string) => void;
  export type CustomFilterHandlertype = (value: string) => OptionType[];
  export type ReturnFilterHandlertype = (options: OptionType[]) => void;
  export type LoadMoreRowstype = (data: { startIndex: number; stopIndex: number }) => Promise<any>;

  export type ComponentsType = {
    Field?: () => ReactNode;
    Indicator?: () => ReactNode;
    List?: () => ReactNode;
    Option?: () => ReactNode;
  };
}
