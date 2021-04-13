import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const InputA = ({
  name,
  label,
  inputStyle,
  labelStyle,
  containerStyle,
  ...rest
}) => {
  return (
    <View style={containerStyle}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput style={[styles.input, inputStyle]} {...rest} />
    </View>
  );
};

export default InputA;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 16,
    marginBottom: 5,
    paddingHorizontal: 5,
  },
  input: {
    backgroundColor: 'rgba(188, 188, 188, 0.25)',
    borderColor: '#BCBCBC',
    borderRadius: 5,
    borderWidth: 2,
    height: 48,
    fontFamily: 'OpenSans_400Regular',
    fontSize: 18,
    padding: 15,
  },
});
