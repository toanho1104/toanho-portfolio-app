import {Platform} from 'react-native';

export const useCheck = () => {
  const isIosPlatform = () => {
    console.log('check platform');
    return Platform.OS === 'ios';
  };

  return {isIosPlatform};
};
