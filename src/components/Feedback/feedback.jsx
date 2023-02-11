import { useState } from 'react';
import style from './feedback.module.css';
import Section from '../Section/Section.jsx';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions.jsx';
import Notification from '../Notification/Notification.jsx';
import Statistics from '../Statistics/Statistics.jsx';

const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = name => {
    setState(prevState => {
    const value = prevState[name];
    return { ...prevState, [name]: value + 1 };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const result = Math.round((good * 100) / countTotalFeedback());
    return result;
  };

  const good = state.good;
  const neutral = state.neutral;
  const bad = state.bad;

  return (
    <div className={style.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
export default Feedback;
