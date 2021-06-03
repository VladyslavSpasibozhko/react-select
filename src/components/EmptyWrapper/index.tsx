import React from 'react';
import { classNames } from 'helpers/classNames';
import { typography } from 'helpers/typography';

import './index.css';

const EmptyWrapper: React.FC = () => {
  return (
    <div className={classNames.emptyWrp}>
      <p className={'message'}>{typography.emptyMessage}</p>
    </div>
  );
};

export default EmptyWrapper;
