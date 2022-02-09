import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <>
                {options.map(option => {
                    return (
                        <button
                            className={s.button}
                            key={option}
                            name={option}
                            onClick={onLeaveFeedback}
                        >
                            {option}
                        </button>
                    )
                })}
            </>
        );
    };
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};