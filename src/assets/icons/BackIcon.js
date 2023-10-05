import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackIcon = ({size, color}) => (
  <Svg
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="m15 4-8 8 8 8"
      stroke={color || '#000'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BackIcon;
