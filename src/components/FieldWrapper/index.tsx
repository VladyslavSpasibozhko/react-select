import React, { useContext } from 'react';
import IndicatorWrapper from 'components/IndicatorWrapper';
import WritableField from './components/WritableField';
import ValuesWrapper from 'components/ValuesWrapper';

import { useClassNames } from 'hooks/useClassNames';

import { SelectContext } from 'components';
import { ISelect } from 'interfaces/global';
import { classNames } from '../../helpers/classNames';

import './index.css';

const FieldWrapper: React.FC = () => {
  const { isFocused, isOpened } = useContext(SelectContext) as ISelect.SelectContextType;

  const classes = useClassNames({
    isFocused,
    isOpened,
    className: classNames.fieldWrp
  });

  return (
    <div className={classes}>
      <WritableField />
      {/* <ValuesWrapper /> */}
      <IndicatorWrapper />
    </div>
  );
};

export default FieldWrapper;
