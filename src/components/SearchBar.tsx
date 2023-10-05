import React, { useRef } from 'react';

import {
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  ViewStyle,
} from 'react-native';
import { HomeIcon } from '../assets/icons';
import { wh, ww } from '../helpers';


interface SearchbarProps {
  containerStyle?: ViewStyle;
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: (text: string) => any;
}

const Searchbar = ({
  containerStyle,
  value,
  onChangeText,
  onSubmitEditing,
}: SearchbarProps) => {
  const inputRef = useRef<TextInput>();
  return (
    <Pressable
      style={[styles.outerView, containerStyle]}
      onPress={() => inputRef?.current?.focus()}>
      <TextInput
        ref={inputRef}
        placeholder="Ara"
        placeholderTextColor="#4657F2"
        autoCapitalize='none'
        style={{
          fontSize: ww(0.04),
          color: '#4657F2',
        }}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      <HomeIcon size={24} color='#4657F2' />
    </Pressable>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  outerView: {
    flexDirection: 'row',
    width: ww(0.8),
    marginTop: wh(0.05),
    height: Platform.OS === 'android' ? wh(0.07) : wh(0.06),
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: ww(0.02),
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: ww(0.07),
  },
});
