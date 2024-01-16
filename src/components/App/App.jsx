import { useState, useEffect } from 'react';
import css from './App.module.css';

import { Description } from '../Description/Description';
import { Feedback } from '../Feedback/Feedback';
import { Options } from '../Options/Options';
import { Notification } from '../Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  //   const [feedback, setFeedback] = useState(() => {
  //     const savedFeedback = localStorage.getItem('saved-feedback');

  //     if (savedFeedback !== null) {
  //       const initialValue = JSON.parse(savedFeedback);
  //       return {
  //         good: initialValue.good,
  //         neutral: initialValue.neutral,
  //         bad: initialValue.bad,
  //       };
  //     }

  //     return {
  //       good: 0,
  //       neutral: 0,
  //       bad: 0,
  //     };
  //   });

  const { good, neutral, bad } = feedback;

  const updateGood = () => {
    setFeedback({
      ...feedback,
      good: good + 1,
    });
  };

  const updateNeutral = () => {
    setFeedback({
      ...feedback,
      neutral: neutral + 1,
    });
  };

  const updateBad = () => {
    setFeedback({
      ...feedback,
      bad: bad + 1,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify({ feedback }));
  }, [feedback]);

  //   Загальна кількість відгуків
  const totalFeedback = good + neutral + bad;

  //   Відсоток позитивних відгуків
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        optionGood={updateGood}
        optionNeutral={updateNeutral}
        optionBad={updateBad}
        reset={() =>
          setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
          })
        }
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
