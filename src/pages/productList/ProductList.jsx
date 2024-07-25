import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import ProductTile from "../productTile";

const ProductList = () => {
  const { listOfProducts, loading } = useContext(ShoppingCartContext);

  if (loading) {
    return <p>Data is loading , Please wait!!!</p>;
  }
  return (
    <div>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl  text-gray-950 sm:text-4xl">
              Our Featured Products
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
            {listOfProducts && listOfProducts.length > 0 ? (
              <>
                {listOfProducts.map((singleProductTile, index) => {
                  return (
                    <ProductTile
                      singleProductTile={singleProductTile}
                      key={index}
                    />
                  );
                })}
              </>
            ) : (
              <>No products found!!!</>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
