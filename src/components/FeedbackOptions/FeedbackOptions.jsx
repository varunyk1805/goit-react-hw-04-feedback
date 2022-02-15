import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onClick }) => {
    const capitalizeFirstLetter = str => {
        return `${str[0].toUpperCase()}${str.slice(1)}`;
    };

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

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;