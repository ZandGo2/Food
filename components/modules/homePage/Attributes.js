import Choice from "../../icons/Choice";
import Clock from "../../icons/Clock";
import Fast from "../../icons/Fast";
import Food from "../../icons/Food";
import styles from "./homePage.module.css";

const Attributes = () => {
    return (
 <div className={styles.containerAttributes}>
      <h3>Why us?</h3>
      <div className={styles.subContainerAttributes}>
        <div>
          <Fast />
          <p>Fast</p>
        </div>
        <div>
          <Food />
          <p>Best Restaurants</p>
        </div>
        <div>
          <Choice />
          <p>Your Choice</p>
        </div>
        <div>
          <Clock />
          <p>24-7</p>
        </div>
      </div>
    </div>
    );
};

export default Attributes;