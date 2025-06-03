import CardFood from "../modules/menu/CardFood";
import styles from "./MenuPage.module.css";

const MenuPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.subContainer}>
        {data.map((item) => (
          <CardFood key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
