import * as React from 'react';

import Svg, {Path} from 'react-native-svg';

const Back = (props: any) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		width={40}
		height={40}
		viewBox="0 0 18 18"
		fill="none"
		stroke="#ffffff"
		strokeWidth={1.5}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="lucide lucide-undo-2"
		{...props}>
		<Path d="M9 14 4 9l5-5" />
	</Svg>
);
export default Back;
