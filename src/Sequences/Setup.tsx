import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import contents from "../contents";
import {Title} from "../components/Title";
import BlankPage from "../assets/icons/BlankPage.svg"
import Package from "../assets/icons/Package.svg"
type SetupProps = {}

export const Setup: React.FC = ({}: SetupProps) => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [30, 60], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    return (
        <>

                <AbsoluteFill className="bg-gray-100 items-center justify-center border-8 border-amber-600 p-8">
                    <Title text={contents.sequence5.title}/>
                    <div className="flex justify-center" style={{opacity}}>
                        <div
                            className="mt-8 p-8 border border-gray-200 rounded bg-white w-64"
                        >
                            <div className="flex justify-center items-center text-gray-500">
                                <img src={BlankPage} width={70} height={70} />
                            </div>
                            <div className="text-center mt-4">
                                <h1 className="font-bold text-gray-700 text">Install</h1>
                                <span className="text-500 text-sm mt-4 text-blue-500">
                                <code>npx create-video</code>
                            </span>
                                <span>
                                <ul>
                                    <li>- hello-word</li>
                                    <li>- javascript</li>
                                    <li>- blank</li>
                                    <li>- tailwind</li>
                                </ul>
                                Choose your template and pass it as option
                            </span>
                            </div>
                        </div>
                        <div
                            className="mt-8 p-8 border border-gray-200 rounded bg-white w-64"
                        >
                            <div className="flex justify-center items-center text-gray-500">
                                <img src={Package} width={70} height={70} />
                            </div>
                            <div className="text-center mt-4">
                                <h1 className="font-bold text-gray-700 text">Dependencies</h1>
                                <span className="text-500 text-sm mt-4 text-blue-500">
                                <code>brew install </code>
                            </span>
                                <span>
                                <ul>
                                    <li>- ffmpeg</li>
                                </ul>
                                FFMPEG A complete, cross-platform solution to record, convert and stream audio and video.
                            </span>
                            </div>
                        </div>
                    </div>

                </AbsoluteFill>
        </>
    );
};
