import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const OPTIONS = ['good', 'neutral', 'bad'];

const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const total = (() => good + neutral + bad)();

    const positivePercentage = (() => 
        total
            ?
            Math.round(good / total * 100)
            :
            0
    )();

    const onLeaveFeedback = event => {
        const name = event.target.name;

        switch (name) {
            case 'good':
                setGood(prev => prev + 1);
                break;
            
            case 'neutral':
                setNeutral(prev => prev + 1);
                break;
            
            case 'bad':
                setBad(prev => prev + 1);
                break;
            
            default:
                return;
        }
    };
   
    return (
        <>
            <Section title='Please leave feedback'>
                <FeedbackOptions
                    options={OPTIONS}
                    onClick={onLeaveFeedback}
                />
            </Section>
            <Section title='Statistics'>
                {total
                    ?
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                    />
                    :
                    <Notification
                        message='There is no feedback'
                    />
                }
            </Section>
        </>
    );
};

export default App;