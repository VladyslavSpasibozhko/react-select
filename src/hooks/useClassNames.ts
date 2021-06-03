import { useEffect, useState } from 'react';

export type UseClassNamesType = {
  isOpened?: boolean;
  isFocused?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;
  className: string;
};

export const useClassNames = ({
  isFocused,
  isOpened,
  isSelected,
  isDisabled,
  className
}: UseClassNamesType): string => {
  const [classes, setClasses] = useState<string[]>([]);

  useEffect(() => {
    const classesArr: string[] = [];

    if (isOpened) classesArr.push('is-opened');
    if (isFocused) classesArr.push('is-focused');
    if (isSelected) classesArr.push('is-selected');
    if (isDisabled) classesArr.push('is-disabled');

    setClasses(classesArr);
  }, [isFocused, isOpened, isSelected, isDisabled]);

  return className + ' ' + classes.map(name => `${className}--${name}`).join(' ');
};
