import css from './Feedback.module.css';

export const Feedback = ({ good, neutral, bad, total, positive }) => {
  //   const totalFeedback = good + neutral + bad;

  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>Positive: {positive}%</li>
    </ul>
  );
};
