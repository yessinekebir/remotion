import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import Author from '../assets/img/user-icon.png'

type QuestionProps = {
    text: string,
    author: string,
    date: string,
    inputRange: [number],
}
export const Question: React.FC = ({text, author, date, inputRange}: QuestionProps) => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, inputRange, [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex" style={{opacity}}>
            <div
                className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{text}</div>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src={Author}
                         alt="Avatar of Yessine Kebir"/>
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{author}</p>
                        <p className="text-gray-600">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
