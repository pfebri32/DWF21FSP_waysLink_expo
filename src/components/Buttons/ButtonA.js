import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonA = ({ title, buttonStyle, titleStyle, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} {...rest}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonA;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FF9F00',
    borderRadius: 5,
    height: 48,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontFamily: 'OpenSans_700Bold',
    fontSize: 18,
  },
});
