import 'startup';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';

import Layout from 'layout/Layout';
import Header from 'components/Header';

export default function App() {
  return (
    <Layout>
      <Header />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
    </Layout>
  );
}
