import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// Components.
import HeaderA from '../components/Headers/HeaderA';
import ButtonA from '../components/Buttons/ButtonA';
import ScrollLayout from '../components/Layouts/ScrollLayout';
import InputA from '../components/Inputs/InputA';

const Register = ({ navigation }) => {
  // Forms.
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollLayout
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
    >
      <HeaderA title="Register" style={styles.header} />
      <View style={styles.form}>
        <InputA
          label="Full Name"
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <InputA
          label="Email"
          placeholder="Email"
          value={email}
          containerStyle={styles.inputMargin}
          onChangeText={(text) => setEmail(text)}
        />
        <InputA
          label="Password"
          placeholder="Password"
          value={password}
          containerStyle={styles.inputMargin}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View>
        <ButtonA title="Login" />
        <ButtonA
          title="Already have an account?"
          buttonStyle={styles.buttonMargin}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ScrollLayout>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 15,
  },
  inputMargin: {
    marginTop: 15,
  },
  buttonMargin: {
    marginTop: 10,
  },
  header: {
    marginBottom: 30,
  },
  form: {
    marginBottom: 20,
  },
});
