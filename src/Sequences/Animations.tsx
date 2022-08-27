import React from 'react';
import {AbsoluteFill, interpolate, interpolateColors, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import contents from "../contents";
import {Title} from "../components/Title";
import {Subtitle} from "../components/Subtitle";

type AnimationsProps = {}

export const Animations: React.FC = ({}: AnimationsProps) => {
    const frame = useCurrentFrame();
    //
    const {fps} = useVideoConfig();


    // Animating title
    const scale = spring({
        fps,
        from: 0,
        to: 1,
        frame
    });

    // Animating subtitle1

    const opacity = interpolate(frame, [30, 240], [0, 1]);

    // Changing color to subtitle2
    const color = interpolateColors(frame, [30, 300], ["red", "yellow"]);


    return (
        <AbsoluteFill className="bg-gray-100 items-center justify-center border-8 border-amber-600 p-8">
            <Title
                className="mr-[10px] ml-[10px] text-gray-700 inline-block"
                style={{
                    transform: `scale(${scale})`,
                }}
                text={contents.sequence7.title}
            />
            <div className="flex direction-column justify-between items-center">
                <Subtitle className="font-bold" text={contents.sequence7.description.value1.label}/>
                <Subtitle
                    className="text-gray-500 w-3/4 mt-8 text-center"
                    style={{opacity}}
                    text={contents.sequence7.description.value1.text}
                />
            </div>
            <div className="flex direction-column justify-between items-center">
                <Subtitle className="font-bold" text={contents.sequence7.description.value2.label}/>
                <Subtitle
                    className="text-gray-500 w-3/4 mt-8 text-center"
                    style={{color}}
                    text={contents.sequence7.description.value2.text}
                />
            </div>

        </AbsoluteFill>
    )
};
