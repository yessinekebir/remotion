import React from 'react';
import {AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import WeatherAppVideo from '../assets/videos/weather-app.mp4'
import contents from "../contents";
import {Title} from "../components/Title";
import {Subtitle} from "../components/Subtitle";

type DynamicVideoProps = {}

export const DynamicVideo: React.FC = ({}: DynamicVideoProps) => {
    const {fps} = useVideoConfig();
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 650], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    // BAD Sample: Do not use <Sequence component inside your component - Use it on Presentation component by wrapping your component: This make useCurrentFrame hook works fine.
    return (
        <>
            <Sequence name={contents.sequence3.name} from={contents.sequence3.startAtSecond * fps}
                      durationInFrames={contents.sequence3.durationInSeconds * fps}>
                <AbsoluteFill className="bg-gray-100 items-center justify-center border-8 border-amber-600 p-8">
                    <Title text={contents.sequence3.title}/>
                    <Subtitle text={contents.sequence3.subtitle}/>
                    <div className="flex justify-center items-center mt-8">
                        {contents.sequence3.description.blocks.map((block, index) => {
                                const isRounded = index + 1 === 1 || index + 1 === contents.sequence3.description.blocks.length;
                                const isLastElement = index + 1 === contents.sequence3.description.blocks.length;
                                return (
                                    <div key={block.id} className="flex items-center" style={{opacity}}>
                                        <div
                                            className={`font-bold text-gray-700 p-8 ${isRounded ? "rounded-full" : ""} bg-slate-300 flex items-center justify-center`}>{block.text}
                                        </div>
                                        {!isLastElement && (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5}
                                                 stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                                            </svg>
                                        )}
                                    </div>
                                )
                            }
                        )}
                    </div>

                </AbsoluteFill>
            </Sequence>
            <Sequence name={contents.sequence4.name} from={contents.sequence4.startAtSecond * fps}
                      durationInFrames={contents.sequence4.durationInSeconds * fps}>
                <AbsoluteFill className="bg-gray-100 items-center justify-center border-8 border-amber-600 p-8">
                    <Title text={contents.sequence4.title}/>
                    <Video src={WeatherAppVideo} endAt={10 * fps} muted/>
                </AbsoluteFill>
            </Sequence>
        </>
    );
};
