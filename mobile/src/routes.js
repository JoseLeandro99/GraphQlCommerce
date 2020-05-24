import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Produtos" component={Home} options={{
        headerStyle: { backgroundColor: '#FFFFFF' },
        headerTitleAlign: 'center',
      }}/>
    </Stack.Navigator>
  );
}

export default Routes;