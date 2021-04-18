import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text } from 'react-native';
import { CommonActions } from '@react-navigation/routers';

// Components.
import ButtonA from '../components/Buttons/ButtonA';
import BaseLayout from '../components/Layouts/BaseLayout';

// Configs.
import { setAuthToken } from '../configs/API';
import { connect } from 'react-redux';

const Template = ({ navigation, logout }) => {
  // Handlers.
  const handleLogout = async () => {
    logout();
    setAuthToken(null);

    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Landing' }],
      })
    );
  };
  return (
    <BaseLayout>
      <Text>Template</Text>
      <ButtonA title="Logout" onPress={handleLogout} />
    </BaseLayout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: 'LOGOUT' }),
  };
};

export default connect(null, mapDispatchToProps)(Template);

const styles = StyleSheet.create({});
