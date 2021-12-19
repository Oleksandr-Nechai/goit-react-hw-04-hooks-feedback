import styles from "./Section.module.css";
import PropTypes from "prop-types"

function Section({title, children }) {
    return (
        <div className={styles.section}>
            <h2 className={ styles.title}>{title}</h2>
            {children}
        </div>
) };

Section.prototype = { 
    title: PropTypes.string.isRequired,
    children:PropTypes.node.isRequired   
}
export default Section;