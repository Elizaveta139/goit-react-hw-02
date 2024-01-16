import css from './Feedback.module.css';

export const Feedback = ({ good, neutral, bad, total, positive }) => {
  //   const totalFeedback = good + neutral + bad;

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
};
