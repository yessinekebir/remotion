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
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                    clipRule="evenodd"
                                />
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
