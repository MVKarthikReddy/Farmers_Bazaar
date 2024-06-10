import React from "react";
import CategoryCard from "../../components/home/CategoryCard";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Link to={"/category/rice"}>
        <CategoryCard
          title="Rice"
          image="https://unsplash.com/photos/brown-wheat-in-close-up-photography-Y678onxFoJI"
        />
      </Link>
      <Link to={"/category/wheat"}>
        <CategoryCard
          title="Wheat"
          image="https://unsplash.com/photos/wheat-field-y4xZxzN754M"
        />
      </Link>
      <Link to={"/category/nuts"}>
        <CategoryCard
          title="Nuts"
          image="https://unsplash.com/photos/variety-of-assorted-color-beans-UhrHTmVBzzE"
        />
      </Link>
      <Link to={"/category/sugar"}>
        <CategoryCard
          title="Sugar"
          image="https://unsplash.com/photos/spoon-of-powder-oKay0q7Pa30"
        />
      </Link>
      <Link to={"/category/spices"}>
        <CategoryCard
          title="Spices"
          image="https://unsplash.com/photos/a-variety-of-spices-on-a-white-table-NPrWYa69Mz0"
        />
      </Link>
      <Link to={"/category/fruits"}>
        <CategoryCard
          title="Fruits"
          image="https://unsplash.com/photos/red-apple-fruit-beside-green-apple-and-yellow-fruit-on-brown-woven-basket-5JQH9Iqnm9o"
        />
      </Link>
      <Link to={"/category/vegetables"}>
        <CategoryCard
          title="Vegetables"
          image="https://www.bhg.com/thmb/cX9GeFKdow2d4mNqEbMRTXjpoZQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/difference-between-fruits-vegetables-01-5f92e7ec706b463287bcfb46985698f9.jpg"
        />
      </Link>
      <Link to={"/category/pulses"}>
        <CategoryCard
          title="Pulses"
          image="https://unsplash.com/photos/a-close-up-of-a-snake-CswUmX6JTvg"
        />
      </Link>
    </div>
  );
}

export default Category;
