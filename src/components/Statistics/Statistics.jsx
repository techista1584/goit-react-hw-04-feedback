import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div className={s.statistics__container}>
        <h3 className={s.statistics__head}>Statistics</h3>
        <ul className={s.statistics__list}>
            <li className={s.item}>Good: {good}</li>
            <li className={s.item}>Neutral: {neutral}</li>
            <li className={s.item}>Bad: {bad}</li>
        </ul>
        <ul className={s.statistics__list}>
            <li className={s.item}>Total: {total}</li>
            <li className={s.item}>Positive feedback: {positivePercentage}%</li>
        </ul>
    </div>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
