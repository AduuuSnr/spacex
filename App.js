import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet} from 'react-native';
import axios from 'axios';
import {useDispatch} from 'react-redux';

import {
  setLaunches,
  setNextLaunches,
  setPastLaunches,
} from '@redux/app/actions';
import RootNavigator from './src/routes/RootNavigator';
import SplashScreen from './src/screens/SplashScreen';
import {BaseUrl} from './src/apis/apiUrl';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getAllLaunches = () => {
    var config = {
      method: 'get',
      url: `${BaseUrl}launches`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        dispatch(setLaunches(response.data));
        if (loading) {
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }
      })
      .catch(function (error) {
        console.log(error);
        if (error) {
          Alert.alert(
            'An error occured.',
            'Please close the app and try again.',
          );
        }
      });
  };

  const getPastLaunches = () => {
    var config = {
      method: 'get',
      url: `${BaseUrl}launches/past`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        dispatch(setPastLaunches(response.data));
      })
      .catch(function (error) {
        Alert.alert('An error occured.', 'Please close the app and try again.');
      });
  };
  const getNextLaunches = () => {
    var config = {
      method: 'get',
      url: `${BaseUrl}launches/past`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        dispatch(setNextLaunches(response.data));
      })
      .catch(function (error) {
        Alert.alert('An error occured.', 'Please close the app and try again.');
      });
  };

  useEffect(() => {
    getNextLaunches();
    getPastLaunches();
    getAllLaunches();
  }, []);

  return loading ? <SplashScreen /> : <RootNavigator />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
