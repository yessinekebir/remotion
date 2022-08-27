import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import contents from "../contents";
import {Title} from "../components/Title";
import {Card} from "../components/Card";

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
                    {contents.sequence5.description.cards.map(card =>
                        <Card title={card.title}
                              description={card?.description}
                              img={card.img} script={card.script}
                              list={card.list}
                        />
                    )}
                </div>

            </AbsoluteFill>
        </>
    );
};
