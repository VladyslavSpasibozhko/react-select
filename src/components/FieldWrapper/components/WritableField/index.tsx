import React, { useContext, useEffect, useState } from 'react';
import { SelectContext } from 'components';
import { ISelect } from 'interfaces/global';

const WritableField = () => {
  const { handleBlur, handleFocus, handleFilter } = useContext(SelectContext) as ISelect.SelectContextType;

  const [value, setValue] = useState<string>('');

  const handleChange = (event: ISelect.InputChangeEvent) => {
    setValue(event.target.value);
    handleFilter(event.target.value);
  };

  return (
    <div className={'select__writable-field'}>
      <input type={'text'} value={value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
    </div>
  );
};

export default WritableField;
