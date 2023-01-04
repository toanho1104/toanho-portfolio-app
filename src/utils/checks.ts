import {Platform} from 'react-native';

export const isIosPlatform = () => {
  console.log('check platform', Platform.OS === 'ios');
  return Platform.OS === 'ios';
};
