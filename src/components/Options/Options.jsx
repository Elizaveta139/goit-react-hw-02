import css from './Options.module.css';

export const Options = ({ optionGood, optionNeutral, optionBad, reset }) => {
  return (
    <div>
      <button onClick={optionGood}>Good</button>
      <button onClick={optionNeutral}>Neutral</button>
      <button onClick={optionBad}>Bad</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
