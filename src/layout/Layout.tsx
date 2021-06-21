import React, { PropsWithChildren } from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

interface ILayoutProps {

}

const layout = ({ children }: PropsWithChildren<ILayoutProps>) => {
  return <View style={styles.container}>
    {children}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default layout;