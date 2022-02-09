import {Component} from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export default class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    options = ['Good', 'Neutral', 'Bad'];
    message = 'There is no feedback';

    // capitalizeFirstLetter = str => {
    //     return `${str[0].toUpperCase()}${str.slice(1)}`;
    // };

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
        const { options, onLeaveFeedback, message, countTotalFeedback, countPositiveFeedbackPercentage } = this;
    
        const total = countTotalFeedback();
        const positivePercentage = countPositiveFeedbackPercentage();
        return (
            <>
                <Section title='Please leave feedback'>
                    <FeedbackOptions 
                        options={options}
                        onLeaveFeedback={onLeaveFeedback}
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
                            message={message}
                        />
                    }
                </Section>
            </>
        );
    };
};