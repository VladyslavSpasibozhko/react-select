import React, { useContext } from 'react';
import { List, ListRowProps } from 'react-virtualized';
import OptionWrapper from 'components/OptionsWrapper';

import { useClassNames } from 'hooks/useClassNames';

import { SelectContext } from 'components';
import { ISelect } from 'interfaces/global';
import { classNames } from 'helpers/classNames';

const VirtualizedList: React.FC = () => {
  const { options, handleSelect, isFocused, isOpened } = useContext(SelectContext) as ISelect.SelectContextType;

  const classes = useClassNames({
    className: classNames.vortualizedListWrp,
    isFocused,
    isOpened
  });

  const renderRow = ({ index, style, ...rest }: ListRowProps) => {
    const option = options[index];

    return <OptionWrapper key={option.id} {...option} handleSelect={handleSelect} style={style} />;
  };

  return (
    <List
      className={classes}
      height={200}
      width={300}
      rowCount={options.length}
      rowHeight={30}
      rowRenderer={renderRow}
    />
  );
};

export default VirtualizedList;
