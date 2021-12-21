import { useState } from 'react';

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggleValue = (): void => setValue(!value);
  return [value, toggleValue];
};
