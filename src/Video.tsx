import {Composition} from 'remotion';
import {Presentation} from './Presentation';
import './style.css';

export const RemotionVideo: React.FC = () => {
	const framePerSecond = 30;
	return (
		<>
			<Composition
				id="Remotion"
				component={Presentation}
				durationInFrames={framePerSecond * 58}
				fps={framePerSecond}
				width={1280}
				height={720}
			/>
		</>
	);
};
