import { SelectContext } from 'components';
import OptionWrapper from 'components/OptionsWrapper';
import { classNames } from 'helpers/classNames';
import { useClassNames } from 'hooks/useClassNames';
import { ISelect } from 'interfaces/global';
import React, { useContext } from 'react';
import { InfiniteLoader, List, ListRowProps } from 'react-virtualized';

const InfiniteVirtualizedList = () => {
  const { options, handleSelect, loadMoreRows, isFocused, isOpened } = useContext(
    SelectContext
  ) as ISelect.SelectContextType;

  const classes = useClassNames({
    className: classNames.vortualizedListWrp,
    isFocused,
    isOpened
  });

  const renderRow = ({ index, style, ...rest }: ListRowProps) => {
    const option = options[index];

    return <OptionWrapper key={option.id} {...option} handleSelect={handleSelect} style={style} />;
  };

  const isRowLoaded = (data: { index: number }): boolean => !!options[data.index];

  return (
    <InfiniteLoader isRowLoaded={isRowLoaded} loadMoreRows={loadMoreRows} rowCount={100} threshold={10}>
      {({ onRowsRendered, registerChild }) => (
        <List
          onRowsRendered={onRowsRendered}
          ref={registerChild}
          className={classes}
          height={200}
          width={300}
          rowCount={options.length}
          rowHeight={30}
          rowRenderer={renderRow}
        />
      )}
    </InfiniteLoader>
  );
};

export default InfiniteVirtualizedList;
