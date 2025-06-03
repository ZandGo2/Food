import styles from "./DetailPage.module.css";
import Recipe from "../modules/Detail/Recipe";
import Ingredients from "../modules/Detail/Ingredients";
import Details from "../modules/Detail/Details";
import BannerDetailPage from "../modules/Detail/BannerDetailPage";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

const DetailPage = (props) => {
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = props;
  return (
    <div className={styles.container}>
      <h2>Details</h2>
      <div className={styles.subContainer}>
        <BannerDetailPage
          id={id}
          name={name}
          price={price}
          discount={discount}
          details={details}
        />

        <div className={styles.introduction}>
          <p>{introduction}</p>
        </div>
        <Details details={details} />
        <Ingredients ingredients={ingredients} />
        <Recipe recipe={recipe} />
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default DetailPage;
