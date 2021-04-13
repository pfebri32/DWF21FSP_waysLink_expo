import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Layouts.
import BaseLayout from '../components/Layouts/BaseLayout';
import ButtonA from '../components/Buttons/ButtonA';

const Landing = () => {
  return (
    <BaseLayout style={styles.container}>
      <View style={styles.headContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>The Only Link</Text>
          <Text style={styles.headerText}>You’ll Ever Need</Text>
        </View>
        <View style={styles.description}>
          <Text
            style={[styles.descriptionText, styles.descriptionTextFirstChild]}
          >
            Add a link for your Social Bio and optimize your social media
            traffic.
          </Text>
          <Text style={styles.descriptionText}>
            Safe, fast and easy to use.
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonA
          title="Login"
          buttonStyle={styles.buttonLogin}
          onPress={() => alert('in')}
        />
        <ButtonA
          title="Register"
          buttonStyle={styles.buttonRegister}
          titleStyle={styles.buttonTitleRegister}
        />
      </View>
    </BaseLayout>
  );
};

export default Landing;

const styles = StyleSheet.create({
  buttonLogin: {
    borderColor: '#fff',
    borderWidth: 2,
  },
  buttonRegister: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  buttonTitleRegister: {
    color: '#FF9F00',
  },
  container: {
    backgroundColor: '#FF9F00',
    flex: 1,
    padding: 15,
  },
  description: {
    marginTop: 15,
  },
  descriptionTextFirstChild: {
    marginTop: 0,
  },
  descriptionText: {
    color: '#fff',
    fontFamily: 'OpenSans_400Regular',
    fontSize: 16,
    marginTop: 5,
  },
  headContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontFamily: 'OpenSans_800ExtraBold',
    fontSize: 40,
  },
});
