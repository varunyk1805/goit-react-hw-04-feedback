import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default class Notification extends Component {
    render() {
        const { message } = this.props;
        return (
            <>
                <h2 className={s.message}>{message}</h2>
            </>
        );
    };
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};