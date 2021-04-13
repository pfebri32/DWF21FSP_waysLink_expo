import React from 'react';
import {
  View,
  StatusBar,
  Platform,
  SafeAreaView as RNSafeAreaView,
} from 'react-native';

const SafeAreaView = ({ children, statusStyle, containerStyle }) => {
  const isAndroid = Platform.OS === 'android';
  return isAndroid ? (
    <View
      style={[
        {
          flex: 1,
          paddingTop: StatusBar.currentHeight,
        },
        statusStyle,
      ]}
    >
      <View style={[{ flex: 1 }, containerStyle]}>{children}</View>
    </View>
  ) : (
    <RNSafeAreaView>{children}</RNSafeAreaView>
  );
};

export default SafeAreaView;
