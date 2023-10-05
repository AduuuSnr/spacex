import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {wh, ww} from '../helpers';
import {BackIcon} from '../assets/icons';

const Header = ({title, onBackButtonPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={onBackButtonPress}>
          <BackIcon color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.blankView} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: ww(1),
    position: 'absolute',
    zIndex: 99,
    top: 0,
    height: wh(0.13),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowColor: '#000',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    width: ww(1),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: wh(0.01),
  },
  headerTitle: {
    color: '#fff',
    fontSize: ww(0.04),
    fontWeight: 'bold',
  },
  backIconContainer: {
    marginLeft: ww(0.02),
    width: ww(0.1),
    height: ww(0.1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  blankView: {
    width: ww(0.1),
  },
});
