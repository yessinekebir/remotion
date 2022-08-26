import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Logo: React.FC = () => {
	const frame = useCurrentFrame();
	const {height, fps} = useVideoConfig();

	const entrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 30,
	});

	const entranceOffset = interpolate(entrance, [0, 1], [height, 0]);

	const wave1 = Math.cos(frame / 15) * 10 + entranceOffset;
	const wave2 = Math.cos((frame - 5) / 15) * 10 + entranceOffset;

	return (
		<div>
			<svg
				style={{}}
				height={120}
				viewBox="0 0 404.3 404.3"
			>
				<g>
					<polygon style={{fill: "#9CDD05", transform: `translateY(${wave1}px)`}} points="27.155,202.15 27.155,404.3 377.145,202.15 	"/>
					<polygon style={{fill: "#B2FA09", transform: `translateY(${wave2}px)`}} points="27.155,0 27.155,202.15 377.145,202.15 	"/>
				</g>

			</svg>

		</div>
	);
};
