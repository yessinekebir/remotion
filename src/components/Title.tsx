import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

type TitleProps = {
	text: string,
	className: string,
	style: object,
}

export const Title: React.FC = ({ text, className, style }: TitleProps) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [10, 30], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{opacity, ...style}}
			className={`text-gray-700 text-5xl font-bold leading-relaxed ${className}`}
		>
			{text}
		</div>
	);
};
