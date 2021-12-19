import styles from "./FeedbackOptions.module.css";
import PropTypes from "prop-types"

function FeedbackOptions({ options, onLeaveFeedback }) {
  const button = options.map(button => (
    <li  key={button}>
      <button className={styles.button } typr="button" value={button} onClick={() => onLeaveFeedback(button)}  >
        {button}
      </button>
    </li>
  ))
  return (
    <ul className= {styles.listButton}>
            {button}
          </ul> 

    )
}

FeedbackOptions.prototype = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;