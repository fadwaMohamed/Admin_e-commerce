import { useContext, useEffect } from "react";
import { ActiveContext } from "../../contexts/HeaderContext";
import SliderCategory from "../categories/SliderCategory";
import SliderHome from "../slider/SliderHome";
import Products from "../products/products";
import CategoryContext from "../../contexts/CategoryContext";

const HomePage = () => {
  const headerCtx = useContext(ActiveContext);

  useEffect(() => {
    headerCtx.changeHeader("Home");
  }, [headerCtx]);

  return (
    <CategoryContext>
      <SliderHome />
      <SliderCategory />
      <Products />
    </CategoryContext>
  );
};

export default HomePage;
