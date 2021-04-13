import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderA = ({ title, titleStyle, ...rest }) => {
  return (
    <View {...rest}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

export default HeaderA;

const styles = StyleSheet.create({
  title: {
    color: '#FF9F00',
    fontFamily: 'OpenSans_800ExtraBold',
    fontSize: 48,
  },
});
