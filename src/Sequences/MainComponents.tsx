import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import contents from "../contents";
import {Title} from "../components/Title";

type MainComponentsProps = {}

export const MainComponents: React.FC = ({}: MainComponentsProps) => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [30, 60], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    return (
        <AbsoluteFill className="bg-gray-100 items-center justify-center border-8 border-amber-600 p-8">
            <Title text={contents.sequence6.title}/>
            <div className="p-8" style={{opacity}}>
                <p className="text-center mt-6 text-lg font-light text-gray-500">
                    "The basic idea behind Remotion is that we'll give you a frame number and a blank canvas, and the
                    freedom to render anything you want using React.js."
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3" style={{opacity}}>
                {contents.sequence6.description.components.map(component =>
                    (<div className="p-8" key={component.name}>
                        <div
                            className="bg-amber-100 rounded-full w-16 h-16 flex justify-center items-center text-amber-500 shadow-2xl"
                        >
                            <svg
                                width="30.725px" height="30.725px" viewBox="0 0 30.725 30.725"
                                fill="currentColor"
                            >
                                <g>
                                    <path d="M24.078,26.457c0.977,0.978,0.977,2.559,0,3.536c-0.488,0.488-1.128,0.731-1.77,0.731c-0.639,0-1.278-0.243-1.768-0.731
                                            L5.914,15.362l14.629-14.63c0.977-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.56,0,3.536L12.984,15.362L24.078,26.457z"/>
                                </g>
                            </svg>
                        </div>
                        <h2 className="uppercase mt-6 text-amber-500 font-medium mb-3">
                            {component.name}
                        </h2>
                        <p className="font-light text-sm text-gray-500 mb-3">
                            {component.description}
                        </p>
                        <img src={component.img}/>
                    </div>)
                )}

            </div>
        </AbsoluteFill>
    );
};
