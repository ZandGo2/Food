import styles from "./HomePage.module.css";
import Banner from "../modules/homePage/Banner.js";
import Definition from "../modules/homePage/Definition.js";
import Attributes from "../modules/homePage/Attributes.js";
import Companies from "../modules/homePage/Companies.js";
import Restrictions from "../modules/homePage/Restrictions.js";
import Guide from "../modules/homePage/Guide.js";
import Instruction from "../modules/homePage/Instruction.js";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
};

export default HomePage;
