import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/routers';
import { StyleSheet, View } from 'react-native';

// Components.
import HeaderA from '../components/Headers/HeaderA';
import ButtonA from '../components/Buttons/ButtonA';
import ScrollLayout from '../components/Layouts/ScrollLayout';
import InputA from '../components/Inputs/InputA';

// Actions.
import { loginAction } from '../actions/authAction';

const Login = ({ navigation, login, auth }) => {
  // Validate user.
  if (auth.isLogin) {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Template' }],
      })
    );
  }

  // Forms.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollLayout
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
    >
      <HeaderA title="Login" style={styles.header} />
      <View style={styles.form}>
        <InputA
          label="Email"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <InputA
          label="Password"
          placeholder="Password"
          value={password}
          containerStyle={styles.inputMargin}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
      <View>
        <ButtonA title="Login" onPress={() => login(email, password)} />
        <ButtonA
          title="Don't have an account?"
          buttonStyle={styles.buttonMargin}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ScrollLayout>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(loginAction(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
