import styles from "./Notification.module.css";
import PropTypes from "prop-types"

function Notification({message}) {
    return (
        <>
            <p className={styles.message }>{message}</p> 
        </>
) };

Notification.prototype = { 
    message: PropTypes.string.isRequired   
}
export default Notification;


