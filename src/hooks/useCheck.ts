import {Platform} from 'react-native';

export const useCheck = () => {
  const isIosPlatform = () => {
    return Platform.OS === 'ios';
  };

  return {isIosPlatform};
};
