import React, { useContext } from 'react';
import VirtualizedList from 'components/ListWrapper/components/VirtualizedList';
import InfiniteVirtualizedList from 'components/ListWrapper/components/InfiniteVirtualizedList';
import EmptyWrapper from 'components/EmptyWrapper';

import { SelectContext } from 'components';
import { ISelect } from 'interfaces/global';
import { useClassNames } from 'hooks/useClassNames';
import { classNames } from 'helpers/classNames';

import './index.css';

const ListWrapper = () => {
  const { isFocused, isOpened, options } = useContext(SelectContext) as ISelect.SelectContextType;

  const classes = useClassNames({
    isOpened,
    isFocused,
    className: classNames.listWrp
  });

  const isEmpty = options.length === 0;

  return (
    <div className={classes}>
      {isOpened && (
        <>
          {isEmpty && <EmptyWrapper />}
          {!isEmpty && <InfiniteVirtualizedList />}
        </>
      )}
    </div>
  );
};

export default ListWrapper;
