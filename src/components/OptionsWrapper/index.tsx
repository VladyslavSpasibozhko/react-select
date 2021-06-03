import React, { useContext, useMemo } from 'react';
import Option from './components/Option';

import { useClassNames } from 'hooks/useClassNames';

import { SelectContext } from 'components';
import { ISelect } from 'interfaces/global';
import { classNames } from 'helpers/classNames';

import './index.css';

const OptionWrapper: React.FC<ISelect.OptionPropsType> = ({ style, ...rest }) => {
  const { selectedOptions } = useContext(SelectContext) as ISelect.SelectContextType;

  const isSelected = useMemo(
    () => !!selectedOptions.find(selectedOption => selectedOption.id === rest.id),
    [selectedOptions]
  );

  const classes = useClassNames({
    isSelected,
    className: classNames.optionWrp
  });

  return (
    <div style={style} className={classes}>
      <Option {...rest} isSelected={isSelected} />
    </div>
  );
};

export default OptionWrapper;
