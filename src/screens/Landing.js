import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/routers';

// Components.
import BaseLayout from '../components/Layouts/BaseLayout';
import ButtonA from '../components/Buttons/ButtonA';

const Landing = ({ navigation, auth }) => {
  // Validate user.
  if (auth.isLogin) {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Template' }],
      })
    );
  }
  return (
    <BaseLayout style={styles.container}>
      <View style={styles.headContainer}>
        <View style={styles.imageContainer}>
          <View>
            <Image
              style={styles.imagePC}
              source={require('../../assets/PC.png')}
            />
          </View>
          <View style={styles.imageAbsolute}>
            <Image
              style={styles.imagePhone}
              source={require('../../assets/Phone.png')}
            />
          </View>
        </View>
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
          onPress={() => navigation.navigate('Login')}
        />
        <ButtonA
          title="Register"
          buttonStyle={styles.buttonRegister}
          titleStyle={styles.buttonTitleRegister}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </BaseLayout>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);

const styles = StyleSheet.create({
  imageAbsolute: {
    position: 'absolute',
    bottom: -30,
    right: -30,
  },
  imagePhone: {
    height: 220,
    resizeMode: 'contain',
  },
  imagePC: {
    height: 240,
    resizeMode: 'contain',
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative',
    marginBottom: 30,
  },
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
    position: 'relative',
  },
  headerText: {
    color: '#fff',
    fontFamily: 'OpenSans_800ExtraBold',
    fontSize: 40,
  },
});
