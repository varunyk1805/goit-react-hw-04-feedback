import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {

    capitalizeFirstLetter = str => {
        return `${str[0].toUpperCase()}${str.slice(1)}`;
    };

    render() {
        const { options, onClick } = this.props;
        const { capitalizeFirstLetter } = this;
        return (
            <>
                {options.map(option => (
                    <button
                        className={s.button}
                        key={option}
                        name={option}
                        onClick={onClick}
                    >
                        {capitalizeFirstLetter(option)}
                    </button>
                ))}
            </>
        );
    };
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};