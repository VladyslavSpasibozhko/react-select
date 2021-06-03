import React, { useContext } from 'react';
import Indicator from './components/Indicator';
import { SelectContext } from 'components';

import { ISelect } from 'interfaces/global';
import { classNames } from 'helpers/classNames';

import './index.css';

const IndicatorWrapper = () => {
  const { handleOpen } = useContext(SelectContext) as ISelect.SelectContextType;

  return (
    <div className={classNames.indicatordWrp} onClick={handleOpen}>
      <Indicator />
    </div>
  );
};

export default IndicatorWrapper;
