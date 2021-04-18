import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

// Actions.
import { validateAction } from '../actions/authAction';

// Components.
import SafeAreaView from '../components/SafeAreaView';

const Splash = ({ navigation, validate }) => {
  useEffect(() => {
    validate();
    setTimeout(() => {
      navigation.navigate('Landing');
    }, 1500);
  }, []);
  return (
    <SafeAreaView>
      <Text>Splash</Text>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    validate: () => dispatch(validateAction()),
  };
};

export default connect(null, mapDispatchToProps)(Splash);
