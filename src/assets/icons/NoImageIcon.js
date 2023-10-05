import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const NoImageIcon = ({size, color}) => (
  <Svg
    width={size || 110}
    height={size || 110}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M5 25A20 20 0 0 1 25 5h60a20 20 0 0 1 20 20v60a20 20 0 0 1-20 20H25A20 20 0 0 1 5 85V25Z"
      stroke={color || '#000'}
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M37.5 50C44.404 50 50 44.404 50 37.5S44.404 25 37.5 25 25 30.596 25 37.5 30.596 50 37.5 50ZM67.63 58.105 25 105h60.665A19.335 19.335 0 0 0 105 85.665V85c0-2.33-.875-3.225-2.45-4.95L82.4 58.075a10 10 0 0 0-14.77.03v0Z"
      stroke={color || '#000'}
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default NoImageIcon;
