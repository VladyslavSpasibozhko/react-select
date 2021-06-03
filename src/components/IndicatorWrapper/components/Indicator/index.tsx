import React, { useContext } from 'react';

import { SelectContext } from 'components';
import { useClassNames } from 'hooks/useClassNames';

import { ISelect } from 'interfaces/global';
import { classNames } from 'helpers/classNames';

const Indicator = () => {
  const { isFocused, isOpened } = useContext(SelectContext) as ISelect.SelectContextType;

  const classes = useClassNames({
    isFocused,
    isOpened,
    className: classNames.indicator
  });

  return (
    <div className={classes}>
      <i className={'icon-down-open-big'}></i>
    </div>
  );
};

export default Indicator;
