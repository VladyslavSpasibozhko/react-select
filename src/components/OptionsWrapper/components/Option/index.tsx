import React, { memo } from 'react';

import { ISelect } from 'interfaces/global';
import { classNames } from 'helpers/classNames';

const Option: React.FC<ISelect.OptionPropsType> = ({ id, value, isSelected, handleSelect }) => {
  const handleClick = () => {
    handleSelect(
      {
        id,
        value
      },
      []
    );
  };

  return (
    <div className={classNames.option} onClick={handleClick}>
      <div className={'option__label'}>{value}</div>
      <div className={'option__checkbox'}></div>
    </div>
  );
};

export default memo(Option);
