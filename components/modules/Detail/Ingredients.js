import styles from "../../templates/DetailPage.module.css";

const Ingredients = ({ingredients}) => {
  return (
    <div className={styles.details}>
      <h4>Ingredients</h4>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
