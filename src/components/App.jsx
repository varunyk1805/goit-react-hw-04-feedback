import {Component} from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export default class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback = () => {
        return Object.values(this.state)
        .reduce((acc, value) => acc += value, 0)
    };

    countPositiveFeedbackPercentage = () => (
        this.countTotalFeedback
            ?
            Math.round(this.state.good / this.countTotalFeedback() * 100)
            :
            0
    );

    onLeaveFeedback = event => {
        const keyState = event.target.name.toLowerCase();
        this.setState({ [keyState]: this.state[keyState] + 1 });
    };

    render() { 
        const { good, neutral, bad } = this.state;
        const { onLeaveFeedback, countTotalFeedback, countPositiveFeedbackPercentage, state } = this;
        const options = Object.keys(state);
    
        const total = countTotalFeedback();
        const positivePercentage = countPositiveFeedbackPercentage();
        return (
            <>
                <Section title='Please leave feedback'>
                    <FeedbackOptions 
                        options={options}
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
};