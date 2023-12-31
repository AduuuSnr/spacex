import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SpacexLogo = ({size, color}) => (
  <Svg
    width={size || 155}
    height={size || 65}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M154.7.024c-.054 0-.078-.024-.097-.024a.326.326 0 0 0-.155.053C56.737 9.877 10.821 52.298 0 62.736L1.439 65h17.074C62.888 20.436 122.856 5.645 154.574.784l.024.024c.019 0 .044-.053.073-.053A.377.377 0 0 0 155 .382c0-.179-.131-.305-.305-.353l.005-.005ZM2.446 22.874l-1.032 1.94L22.38 40.08a204.743 204.743 0 0 1 12.996-6.927L21.323 22.874H2.446Zm46.599 20.248a219.272 219.272 0 0 0-10.827 8.494L56.64 64.99h19.1l.808-1.736-27.504-20.132Z"
      fill={color || '#000'}
    />
  </Svg>
);

export default SpacexLogo;
