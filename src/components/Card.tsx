import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import Author from '../assets/img/user-icon.png'
import BlankPage from "../assets/icons/BlankPage.svg";

type CardProps = {
    title: string,
    img: string,
    script: string,
    list: [string],
    description: string,
}
export const Card: React.FC = ({title, img, script, list, description}: CardProps) => {

    return (
        <div
            className="mt-8 p-8 border border-gray-200 rounded bg-white w-64 flex justify-start flex-col"
        >
            <div className="flex justify-center items-center text-gray-500">
                <img src={img} width={70} height={70}/>
            </div>
            <div className="text-center mt-4">
                <h1 className="font-bold text-gray-700 text">{title}</h1>
                <span className="text-500 text-sm mt-4 text-blue-500">
                                <code>{script}</code>
                            </span>
                <span>
                    <ul>
                        {list.map(el => <li>- {el}</li>)}
                    </ul>
                    {description}
                </span>
            </div>
        </div>
    );
};
