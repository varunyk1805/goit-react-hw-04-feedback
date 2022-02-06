import React from "react";

export default class Statistics extends React.Component {

    render() {
        return (
            <>
                <h2>Statistics</h2>
                <ul>
                    <li>Good: {this.props.good}</li>
                    <li>Neutral: {this.props.neutral}</li>
                    <li>Bad: {this.props.bad}</li>
                    <li>Total: {this.props.total}</li>
                    <li>Positive feedback: {this.props.positivePercentage}%</li>
                </ul>
                {/* {this.stateKeys.map(key => {
                    return (
                        <span key={key}>{this.capitalizeFirstLetter(key)}: {this.state[key]}</span>
                    )
                })}
                <span>Total: {this.countTotalFeedback()}</span>
                <span>Positive feedback: {this.countPositiveFeedbackPercentage()}%</span> */}
            </>
        );
    };
};