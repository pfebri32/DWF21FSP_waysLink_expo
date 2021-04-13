import React from 'react';
import { StyleSheet } from 'react-native';

// Components.
import SafeAreaView from '../SafeAreaView';

const BaseLayout = ({ children, style }) => {
  return (
    <SafeAreaView containerStyle={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

export default BaseLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
});
