import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import YouTube from 'react-native-youtube';

import {NoImageIcon} from '../assets/icons';
import {Header} from '../components';
import {wh, ww} from '../helpers';

const LaunchDetails = ({route, navigation}) => {
  const {item} = route.params;
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState('');
  const [quality, setQuality] = useState('');
  const [error, setError] = useState('');

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#020024', '#090979', '#00d4ff']}
        style={styles.container}>
        <Header
          onBackButtonPress={() => navigation.pop()}
          missionName={item.mission_name}
        />

        <ScrollView style={styles.scrollView}>
          {item.links.mission_patch !== null ? (
            <Image
              source={{uri: item.links.mission_patch}}
              style={styles.missionPatch}
            />
          ) : (
            <View style={styles.noImageContainer}>
              <NoImageIcon />
              <Text>No Patch</Text>
            </View>
          )}
          <View style={styles.detailContainer}>
            <View style={[styles.row, {marginTop: wh(0.01)}]}>
              <View style={styles.rowTitle}>
                <Text style={styles.rowTitleText}>Mission Name </Text>
              </View>
              <View>
                <Text style={styles.rowTitleText}> : </Text>
              </View>
              <View style={styles.rowDetail}>
                <Text style={styles.rowDetailText}>{item.mission_name}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.rowTitle}>
                <Text style={styles.rowTitleText}>Flight Number </Text>
              </View>
              <View>
                <Text style={styles.rowTitleText}> : </Text>
              </View>
              <View style={styles.rowDetail}>
                <Text style={styles.rowDetailText}>{item.flight_number}</Text>
              </View>
            </View>
            <View style={[styles.row, {marginTop: wh(0.03)}]}>
              <View style={styles.rowTitle}>
                <Text style={styles.rowTitleText}>Rocket Name </Text>
              </View>
              <View>
                <Text style={styles.rowTitleText}> : </Text>
              </View>
              <View style={styles.rowDetail}>
                <Text style={styles.rowDetailText}>
                  {item.rocket.rocket_name}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.rowTitle}>
                <Text style={styles.rowTitleText}>Rocket Type </Text>
              </View>
              <View>
                <Text style={styles.rowTitleText}> : </Text>
              </View>
              <View style={styles.rowDetail}>
                <Text style={styles.rowDetailText}>
                  {item.rocket.rocket_type}
                </Text>
              </View>
            </View>
            <View style={[styles.row, {marginTop: wh(0.03)}]}>
              <View style={styles.rowTitle}>
                <Text style={styles.rowTitleText}>Launch Success</Text>
              </View>
              <View>
                <Text style={styles.rowTitleText}> : </Text>
              </View>
              <View style={styles.rowDetail}>
                {item.launch_success === false ? (
                  <Text style={styles.rowDetailText}>Launch Failed</Text>
                ) : (
                  <Text style={styles.rowDetailText}>Launch success</Text>
                )}
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.rowTitle}>
                <Text style={styles.rowTitleText}>Launch Failure Reason </Text>
              </View>
              <View>
                <Text style={styles.rowTitleText}> : </Text>
              </View>
              <View style={styles.rowDetail}>
                <Text style={styles.rowDetailText}>
                  {item.launch_failure_details?.reason}
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.row,
                {
                  marginTop: wh(0.03),
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <View style={styles.rowTitle}>
                <Text style={styles.rowTitleText}>Detail </Text>
              </View>
              <View>
                <Text style={styles.rowTitleText}> : </Text>
              </View>
              <View style={styles.rowDetail}>
                <Text style={styles.rowDetailText}>{item.details}</Text>
              </View>
            </View>
          </View>
          <YouTube
            videoId={item.links.youtube_id} // The YouTube video ID
            play={false}
            fullscreen // control whether the video should play in fullscreen or inline
            loop // control whether the video should loop when ended
            onReady={e => setIsReady(true)}
            onChangeState={e => setStatus(e.state)}
            onChangeQuality={e => setQuality(e.quality)}
            onError={e => setError(e.error)}
            style={styles.videoStyle}
          />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};
// launch_success
export default LaunchDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
  },
  rowTitle: {
    width: ww(0.4),
  },
  rowDetail: {
    width: ww(0.4),
  },
  missionPatch: {
    alignSelf: 'center',
    width: ww(0.5),
    height: ww(0.5),
  },
  noImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowTitleText: {
    fontSize: ww(0.035),
    fontWeight: 'bold',
  },
  rowDetailText: {
    marginLeft: ww(0.02),
    fontSize: ww(0.035),
  },
  backgroundVideo: {
    width: ww(0.5),
  },
  scrollView: {
    width: ww(1),
    height: wh(1),
    marginBottom: wh(0.03),
    marginTop: wh(0.08),
  },
  videoStyle: {
    width: ww(0.98),
    height: wh(0.25),
    marginTop: wh(0.03),
    alignSelf: 'center',
    borderRadius: 10,
  },
  detailContainer: {
    marginTop: wh(0.02),
    borderRadius: ww(0.02),
    width: ww(0.9),
    height: ww(0.99),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    shadowColor: '#fff',
    shadowOffset: {
      width: ww(0.02),
      height: wh(0.01),
    },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
});
