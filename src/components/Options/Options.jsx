import css from './Options.module.css';

export const Options = ({
  optionGood,
  optionNeutral,
  optionBad,
  reset,
  total,
}) => {
  return (
    <div className={css.wrap}>
      <button className={css.btn} onClick={optionGood}>
        Good
      </button>
      <button className={css.btn} onClick={optionNeutral}>
        Neutral
      </button>
      <button className={css.btn} onClick={optionBad}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.btn} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};
