import PropTypes from 'prop-types';
import React from 'react';
import style from './statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <div className={style.statWrapper}>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
      </div>
      <div className={style.totalWrapper}>
        <span className={style.total}>Total: {total}</span>
        <span className={style.percentage}>
          Positive feedback: {positivePercentage}%
        </span>
      </div>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
