import { useEffect } from 'react';
import { Movement, MOVEMENT_KEYS } from '../store/matrix/types';

const useKeyPressCallback = (callback: (key: Movement) => void) => {
  const handleOnKeyPress = ({ key }: { key: string }) => {
    if (MOVEMENT_KEYS.includes(key)) {
      callback(key as Movement);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyPress);

    return () => {
      document.removeEventListener('keydown', handleOnKeyPress);
    };
  });
};

export default useKeyPressCallback;
