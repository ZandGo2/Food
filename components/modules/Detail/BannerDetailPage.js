import styles from "../../templates/DetailPage.module.css";
import Location from "../../icons/Location";
import Dollar from "../../icons/Dollar";

const BannerDetailPage = ({ id, name, price, discount, details }) => {
  return (
    <div className={styles.banner}>
      <img src={`/images/${id}.jpeg`} alt={name} />
      <div>
        <h3>{name}</h3>
        <span className={styles.location}>
          <Location />
          {details[0].Cuisine}
        </span>
        <span className={styles.price}>
          <Dollar />
          {discount ? (price * (100 - discount)) / 100 : price}$
        </span>
        {discount ? (
          <span className={styles.discount}>{discount}$ OFF</span>
        ) : null}
      </div>
    </div>
  );
};

export default BannerDetailPage;
