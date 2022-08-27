import CompositionScreen from "./assets/img/CompositionScreen.png"
import SequenceScreen from "./assets/img/SequenceScreen.png"
import AbsoluteFillScreen from "./assets/img/AbsoluteFillScreen.png"
import BlankPage from "./assets/icons/BlankPage.svg"
import Bracket from "./assets/icons/Bracket.svg"
import Package from "./assets/icons/Package.svg"

const contents = {
    sequence1: {
        name: "Welcome",
        durationInSeconds: 4,
        startAtSecond: 0,
        title: "Welcome to Remotion",
        subtitle: "Yessine Kebir - Spindox"
    },
    sequence2: {
        name: "What is Remotion",
        durationInSeconds: 13,
        startAtSecond: 4,
        title: "What is Remotion?",
        description: {
            questions: [
                {
                    question: "How can I create MP4 videos by using React?",
                    author: "Mario Rossi",
                    date: "12 Feb",
                    inputRange: [60, 90]
                },
                {
                    question: "Can i create a dynamic video with React?",
                    author: "Paolo Merola",
                    date: "18 Jun",
                    inputRange: [110, 140]
                },
                {
                    question: "Is there a way to create *.mp4 file with React?",
                    author: "Mario Verdi",
                    date: "02 Aug",
                    inputRange: [140, 170]
                }
            ],
        }
    },
    sequence3: {
        name: "Diagram",
        durationInSeconds: 10,
        startAtSecond: 17,
        title: "What is a dynamic video?",
        subtitle: "Sample 1: Dynamic weather forecast",
        description: {
            blocks: [
                {id: "s4-block1", text: "Data fetching"},
                {id: "s4-block2", text: "Set elements render timings & animations"},
                {id: "s4-block3", text: "Render dynamic elements depending on fetched data"},
            ]
        }
    },
    sequence4: {
        name: "Dynamic video",
        durationInSeconds: 10,
        startAtSecond: 27,
        title: "Dynamic weather forecast",
        description: {}
    },
    sequence5: {
        name: "Setup",
        durationInSeconds: 9,
        startAtSecond: 37,
        title: "What about project setup?",
        description: {
            cards: [
                {
                    title: "Install",
                    img: BlankPage,
                    script: "npx create-video",
                    list: ["hello-word", "javascript", "blank", "tailwind"],
                    description: "Choose your template and pass it as option"
                },
                {
                    title: "Dependencies",
                    img: Package,
                    script: "brew install",
                    list: ["ffmpeg"],
                    description: "FFMPEG A complete, cross-platform solution to record, convert and stream audio and video."
                },
                {
                    title: "Scripts",
                    img: Bracket,
                    script: "npm run",
                    list: ["start", "build"],
                },

            ]
        }
    },
    sequence6: {
        name: "Main Components",
        durationInSeconds: 12,
        startAtSecond: 46,
        title: "Main Remotion components",
        description: {
            components: [
                {
                    name: "Composition",
                    img: CompositionScreen,
                    description: "This is the component to use to register a video to make it renderable and make it show up in the sidebar of the Remotion development interface."
                },
                {
                    name: "Sequence",
                    img: SequenceScreen,
                    description: "By using a sequence, you can time-shift the display of your components or parts of your animation in the video."
                },
                {
                    name: "Absolute Fill",
                    img: AbsoluteFillScreen,
                    description: "A helper component absolutely positioned to the main frame"
                }
            ]
        }
    },
    sequence7: {
        name: "Animations",
        durationInSeconds: 10,
        startAtSecond: 58,
        title: "Animating properties",
        description: {
            value1: {
                label: "interpolate",
                text: "~ My opacity value is changing every frame (from 30 to 240) ~",
            },
            value2: {
                label: "interpolateColors",
                text: "~ My color value is changing from red to yellow (from 30 to 300) ~",
            }
        }
    },
    sequence8: {
        name: "Thank you",
        durationInSeconds: 5,
        startAtSecond: 68,
        title: "Thank you for watching!",
        description: {}
    },

}

export default contents