import Config from 'react-native-config';

import React from 'react';

import 'react-native';

import Navigation from '@stacks/index';

console.log('cònig', Config.API_URL);

// import Navigation from './src/stacks';

const App = () => {
  // const modalRef = useRef<IHandle>(null);
  // const handleShow = () => {
  //   modalRef.current?.handleShowModal();
  // };
  return <Navigation />;
};

export default App;
