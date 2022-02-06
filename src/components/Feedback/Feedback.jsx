import React from "react";
import Statistics from "./Statistics/Statistics";

export default class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    // stateKeys = Object.keys(this.state);

    capitalizeFirstLetter(str) {
        return `${str[0].toUpperCase()}${str.slice(1)}`;
    };

    countTotalFeedback() {
        return Object.values(this.state)
        .reduce((acc, value) => acc += value, 0)
    };

    countPositiveFeedbackPercentage() {
        if (this.countTotalFeedback() === 0) {
            return 0;
        };
        return Math.round(this.state.good / this.countTotalFeedback() * 100);
    };

    onLeaveFeedbackGood = () => {
        this.setState({ good: this.state.good + 1 });
    };
    onLeaveFeedbackNeutral = () => {
        this.setState({ neutral: this.state.neutral + 1 });
    };
    onLeaveFeedbackBad = () => {
        this.setState({ bad: this.state.bad + 1 });
    };

    render() { 
        return (
            <>
                <h2>Please leave feedback</h2>
                {/* {this.stateKeys.map(key => {
                    return (
                        <button key={key} onClick={this.onLeaveFeedback}>{this.capitalizeFirstLetter(key)}</button>
                    )
                })} */}
                <button type="button" onClick={this.onLeaveFeedbackGood}>Good</button>
                <button type="button" onClick={this.onLeaveFeedbackNeutral}>Neutral</button>
                <button type="button" onClick={this.onLeaveFeedbackBad}>Bad</button>
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
            </>
        );
    };
}; 