import PropTypes from 'prop-types';
import React from 'react';
import style from './notification.module.css';

export default function Notification({ message }) {
  return (
    <>
      <span className={style.message}>{message}</span>
    </>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
