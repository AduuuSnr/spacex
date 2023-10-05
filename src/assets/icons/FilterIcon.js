import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const FilterIcon = ({size, color}) => (
  <Svg
    width={size || 20}
    height={size || 18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M18.627.61H1.373a.75.75 0 0 0-.645 1.124l5.452 9.268v5.639c0 .415.332.75.745.75h6.15a.747.747 0 0 0 .745-.75V11l5.454-9.267A.751.751 0 0 0 18.627.61Zm-6.485 15.093H7.858v-3.656h4.287v3.656h-.003Zm.225-5.545-.223.389H7.856l-.222-.39-4.648-7.86h14.03l-4.648 7.86Z"
      fill={color || '#000'}
    />
  </Svg>
);

export default FilterIcon;
