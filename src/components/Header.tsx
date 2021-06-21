import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Header = () => {
  const [ state, setState ] = useState(() => '28 juin 1994'.as);

  const button = useRef(null);

  return <View>
    <Text>{state}</Text>
    <Button onPress={() => setState('Clicked IN')} ref={button} title='Click on Me' />
  </View>;
};


export default Header;
