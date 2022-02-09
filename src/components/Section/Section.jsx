import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

export default class Section extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <>
                <h2 className={s.title}>{title}</h2>
                {children}
            </>
        );
    };
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
};