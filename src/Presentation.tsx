import {AbsoluteFill, Sequence, useVideoConfig, Video} from 'remotion';
import {Logo} from './components/Logo';
import {Subtitle} from './components/Subtitle';
import {Title} from './components/Title';
import React from "react";
import {Question} from "./components/Question";
import contents from "./contents";
import {DynamicVideo} from "./Sequences/DynamicVideo";
import {Setup} from "./Sequences/Setup";
import {MainComponents} from "./Sequences/MainComponents";

export const Presentation = () => {
    const {fps} = useVideoConfig();
    return (
        <>
            <Sequence name={contents.sequence1.name} from={contents.sequence1.startAtSecond * fps}
                      durationInFrames={contents.sequence1.durationInSeconds * fps}>
                <AbsoluteFill className="bg-gray-100 items-center justify-center border-8 border-amber-600 p-8">
                    <Logo/>
                    <Title text={contents.sequence1.title}/>
                    <Subtitle text={contents.sequence1.subtitle}/>
                </AbsoluteFill>
            </Sequence>
            <Sequence name={contents.sequence2.name} from={contents.sequence2.startAtSecond * fps}
                      durationInFrames={contents.sequence2.durationInSeconds * fps}>
                <AbsoluteFill className="bg-gray-100 items-center justify-center border-8 border-amber-600 p-8">
                    <Title text={contents.sequence2.title}/>
                    <div className="flex justify-between mt-8">
                        {contents.sequence2.description.questions.map(({question, author, date, inputRange}) =>
                            <Question key={question} text={question} author={author} date={date}
                                      inputRange={inputRange}/>)
                        }
                    </div>
                </AbsoluteFill>
            </Sequence>
            <DynamicVideo/>
            <Sequence name={contents.sequence5.name} from={contents.sequence5.startAtSecond * fps}
                      durationInFrames={contents.sequence5.durationInSeconds * fps}>
                <Setup />
            </Sequence>
            <Sequence name={contents.sequence6.name} from={contents.sequence6.startAtSecond * fps}
                      durationInFrames={contents.sequence6.durationInSeconds * fps}>
                <MainComponents />
            </Sequence>
        </>
    );
};
