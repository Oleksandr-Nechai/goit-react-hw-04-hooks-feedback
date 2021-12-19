import styles from "./Statistics.module.css";
import PropTypes from "prop-types"

  
function Statistics({ good, neutral, bad, total, positivePercentage })
{
    return (
        <ul className={styles.statistics }>
            <li className={styles.item}>
            <p>Good: {good}</p>
        </li>
        <li className={styles.item}>
            <p>Neutral: {neutral}</p>
        </li >
        <li className={styles.item}>
            <p>Bad: {bad}</p>
        </li>
        <li className={styles.item}>
            <p>Total: {total}</p>
        </li>
        <li className={styles.item}>
            <p>Positive feedback: {positivePercentage} %</p>
        </li>
    </ul>
    )
}


Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}
export default Statistics;