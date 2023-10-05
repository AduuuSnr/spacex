import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SpacexLogo} from '../assets/icons';
import {wh} from '../helpers';

const SplashScreen = () => {
  return (
    <LinearGradient
      colors={['#4657F2', '#3b5998', '#000000']}
      style={styles.container}>
      <View>
        <SpacexLogo color="#fff" />
      </View>
      <View style={styles.ActivityIndicator}>
        <ActivityIndicator size="large" />
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ActivityIndicator: {
    marginTop: wh(0.1),
  },
});
