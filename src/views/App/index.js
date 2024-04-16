import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

import AppNavigator from '../AppNavigator';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return <AppNavigator />;
};

export default App;
