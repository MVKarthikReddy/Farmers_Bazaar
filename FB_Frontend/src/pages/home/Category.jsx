import React from "react";
import CategoryCard from "../../components/home/CategoryCard";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Link to={"/category/rice"}>
        <CategoryCard
          title="Rice"
          image="https://img.etimg.com/thumb/msid-106097139,width-300,height-225,imgsize-907343,resizemode-75/rice-price-today.jpg"
        />
      </Link>
      <Link to={"/category/wheat"}>
        <CategoryCard
          title="Wheat"
          image="https://cdn.britannica.com/80/157180-050-7B906E02/Heads-wheat-grains.jpg"
        />
      </Link>
      <Link to={"/category/nuts"}>
        <CategoryCard
          title="Nuts"
          image="https://www.allrecipes.com/thmb/Wg9OMnGfdNUmqSVT_HhN9BX9OQY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/How-to-Store-Nuts-3x2-1-47cd3e4e561c466984fd00251a5d6f70.png"
        />
      </Link>
      <Link to={"/category/sugar"}>
        <CategoryCard
          title="Sugar"
          image="https://cdn.britannica.com/47/192347-131-62E67449/types-sugar-brown.jpg"
        />
      </Link>
      <Link to={"/category/spices"}>
        <CategoryCard
          title="Spices"
          image="https://hospitalityinsights.ehl.edu/hubfs/1440/1440x960-spices.jpg"
        />
      </Link>
      <Link to={"/category/fruits"}>
        <CategoryCard
          title="Fruits"
          image="https://www.fruitsmith.com/pub/media/mageplaza/blog/post/o/n/one_seed_fruits.png"
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
          image="https://cdn.shopaccino.com/refresh/articles/dal-pulse-745535_l.jpg?v=421"
        />
      </Link>
    </div>
  );
}

export default Category;
