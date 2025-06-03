import styles from "../../templates/DetailPage.module.css";


const Recipe = ({recipe}) => {
  return (
    <div className={styles.recipe}>
      <h4>Recipe</h4>
      {recipe.map((item, index) => (
        <div key={index} className={index % 2 ? styles.odd : styles.even}>
          <span>{index + 1}</span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
