import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native';
import {useSelector} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {Dropdown} from 'react-native-element-dropdown';

import {wh, ww} from '../helpers';
import {Searchbar, SearchBox} from '../components';
import {FilterIcon, NextIcon, PastIcon} from '../assets/icons';

const data = [
  {label: 'Mission Name', value: '1'},
  {label: 'Rocket', value: '2'},
  {label: 'Year', value: '3'},
];

const HomeScreen = ({navigation}) => {
  const launches = useSelector(state => state.app.launches);

  const SliderWidth = Dimensions.get('screen').width;

  const carouselRef = useRef(null);

  const [activeIndex, setActivateIndex] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const searchByMissionName = text => {
    if (text) {
      const newData = launches.filter(function (item) {
        const itemData = item.mission_name
          ? item.mission_name.toUpperCase()
          : ''.toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
    } else {
      setFilteredDataSource(launches);
    }
  };
  const searchByRocketName = text => {
    if (text) {
      const newData = launches.filter(function (item) {
        const itemData = item.rocket.rocket_name
          ? item.rocket.rocket_name.toUpperCase()
          : ''.toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilteredDataSource(newData);
    } else {
      setFilteredDataSource(launches);
    }
  };
  const searchByYear = text => {
    if (text) {
      const newData = launches.filter(function (item) {
        const itemData = item.launch_year
          ? item.launch_year.toUpperCase()
          : ''.toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilteredDataSource(newData);
    } else {
      setFilteredDataSource(launches);
    }
  };

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
    <LinearGradient
      colors={['#020024', '#090979', '#00d4ff']}
      style={styles.container}>
      <View>
        <View style={styles.searchBar}>
          <Searchbar
            onChangeText={text => setSearchValue(text)}
            onSubmitEditing={() => {
              if (value === '1') {
                searchByMissionName(searchValue);
              } else if (value === '2') {
                searchByRocketName(searchValue);
              } else if (value === '3') {
                searchByYear(searchValue);
              } else {
                setFilteredDataSource(launches);
              }
            }}
          />
          <View style={styles.filterButton}>
            <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
              containerStyle={{
                width: ww(0.4),
                marginLeft: -ww(0.4),
              }}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => <FilterIcon color="#fff" />}
            />
          </View>
        </View>
        {filteredDataSource.length === 0 ? (
          <Carousel
            loop
            layout={'default'}
            ref={carouselRef}
            data={launches}
            style={{zIndex: 0}}
            sliderWidth={SliderWidth}
            itemWidth={ww(0.8)}
            renderItem={_renderItem}
            useScrollView
            onSnapToItem={index => setActivateIndex(index)}
            activeSlideAlignment="center"
          />
        ) : (
          <Carousel
            loop
            layout={'default'}
            ref={carouselRef}
            data={filteredDataSource}
            sliderWidth={SliderWidth}
            itemWidth={ww(0.8)}
            renderItem={_renderItem}
            useScrollView
            onSnapToItem={index => setActivateIndex(index)}
            activeSlideAlignment="center"
          />
        )}

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            style={styles.nextLaunchesContainer}
            onPress={() => navigation.navigate('PastLaunches')}>
            <PastIcon />
            <Text style={styles.buttonText}>Past Launches</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextLaunchesContainer}
            onPress={() => navigation.navigate('NextLaunches')}>
            <NextIcon />

            <Text style={styles.buttonText}>Next Launches</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    height: 50,
    paddingHorizontal: 8,
  },
  filterContainer: {
    width: ww(0.1),
    height: wh(0.05),
    alignItems: 'center',
    justifyContent: 'center',
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
  bottomDetails: {
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: ww(0.5),
    alignSelf: 'center',
    marginBottom: wh(0.01),
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: ww(0.05),
    marginTop: wh(0.03),
  },
  nextLaunchesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
    bottom: wh(0.15),
    borderRadius: ww(0.03),
    width: ww(0.4),
    height: wh(0.2),
    elevation: 10,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowOffset: {x: 0, y: -2},
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
  filterButton: {
    left: ww(0.01),
    width: ww(0.13),
    height: ww(0.13),
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
  searchBar: {
    marginTop: wh(0.02),
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
