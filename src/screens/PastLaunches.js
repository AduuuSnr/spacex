import React, {useEffect, useState, useRef} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import axios from 'axios';
import {Header} from '../components';
import {BaseUrl} from '../apis/apiUrl';
import Carousel from 'react-native-snap-carousel';
import {wh, ww} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const PastLaunches = ({navigation}) => {
  const SliderWidth = Dimensions.get('screen').width;

  const pastLaunches = useSelector(state => state.app.pastLaunches);

  const carouselRef = useRef(null);

  const [activeIndex, setActivateIndex] = useState(0);

  const _renderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('LaunchDetails', {item});
        }}
        style={styles.renderItemContainer}>
        <Text style={styles.mission_nameText}>{item.mission_name}</Text>
        <Text numberOfLines={10} style={styles.detailsText}>
          {item.details}
        </Text>
        <Image
          source={{uri: item.links.mission_patch}}
          style={styles.mission_patch}
        />
        <View style={styles.bottomDetails}>
          <View style={styles.rocket_name}>
            <Text style={styles.rocket_name_text}>
              {item.rocket.rocket_name}
            </Text>
          </View>
          <View style={styles.launch_year}>
            <Text style={styles.rocket_name_text}>{item.launch_year}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#020024', '#090979', '#00d4ff']}
        style={styles.container}>
        <Header
          title="Past Launches"
          onBackButtonPress={() => navigation.pop()}
        />
        <View style={{marginTop: wh(0.3)}}>
          <Carousel
            loop
            layout={'stack'}
            ref={carouselRef}
            data={pastLaunches}
            sliderWidth={SliderWidth}
            itemWidth={ww(0.8)}
            renderItem={_renderItem}
            useScrollView
            onSnapToItem={index => setActivateIndex(index)}
            activeSlideAlignment="center"
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default PastLaunches;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderItemContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: ww(0.7),
    padding: 20,
    marginTop: wh(0.06),
    elevation: 10,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowOffset: {x: 0, y: -2},
  },
  rocket_name: {
    backgroundColor: '#4657F2',
    width: ww(0.2),
    height: wh(0.035),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ww(0.01),
  },
  rocket_name_text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  launch_year: {
    backgroundColor: '#4657F2',
    width: ww(0.2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ww(0.01),
  },
  detailsText: {
    fontSize: ww(0.03),
    width: ww(0.6),
    height: wh(0.1),
  },
  bottomDetails: {
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: ww(0.5),
    alignSelf: 'center',
    marginBottom: wh(0.01),
  },
  subContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  flight_number: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mission_name: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mission_nameText: {
    fontSize: ww(0.05),
    fontWeight: 'bold',
    width: ww(0.5),
  },
  mission_patch: {
    position: 'absolute',
    zIndex: 99,
    width: ww(0.2),
    height: ww(0.2),
    right: -ww(0.05),
    top: -wh(0.05),
  },
});
