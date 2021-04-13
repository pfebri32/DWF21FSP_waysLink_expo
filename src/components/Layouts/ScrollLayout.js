import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

// Components.
import SafeAreaView from '../SafeAreaView';

const ScrollLayout = ({ children, style, ...rest }) => {
  return (
    <SafeAreaView>
      <ScrollView style={[styles.container, style]} {...rest}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScrollLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
});
