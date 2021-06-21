import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Header = () => {
  const [ state, setState ] = useState("");

  const button = useRef(null);

  return <View>
    <Text>{state}</Text>
    <Button title="Click on Me" ref={button} onPress={() => setState("Clicked IN")} />
  </View>
}


export default Header;