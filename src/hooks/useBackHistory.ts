import { createBrowserHistory } from 'history';
import { useCallback } from 'react';

const useBackHistory = (): (() => void) => {
  const history = createBrowserHistory();
  return useCallback(() => {
    history.back();
  }, []);
};

export default useBackHistory;
