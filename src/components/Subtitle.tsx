import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

type SubtitleProps = {
	text: string
}

export const Subtitle: React.FC = ({ text }: SubtitleProps) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [30, 50], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div className="text-gray-600 text-xl" style={{opacity}}>
			{text}
		</div>
	);
};
