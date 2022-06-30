import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getCategories } from "../../../DB/dbCategories";
import Category from "./Category";
import Loading from "./../../layout/Loading";

import "swiper/css";
import { categContext } from "../../contexts/CategoryContext";

const SliderCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  const categoryCtx = useContext(categContext);

  const changeCategory = (category) => {
    categoryCtx.setCategory(category);
  };

  return (
    <>
      {categories.length > 0 && (
        <Swiper
          style={{ marginTop: "10px" }}
          direction="horizontal"
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide key="All" onClick={() => changeCategory("All")}>
            <Category category="All products" />
          </SwiperSlide>
          {categories.map((category) => {
            return (
              <SwiperSlide
                key={category.id}
                onClick={() => changeCategory(category.name)}
              >
                <Category category={category.name} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      {categories.length === 0 && <Loading margin="15" />}
    </>
  );
};

export default SliderCategory;
