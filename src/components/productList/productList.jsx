import "./productList.css";
import Product from "../product/product";
import products  from "../data/data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Content Creator</h1>
                <p className="pl-desc">
                    In his spare time, Isaiah loves to create content to inform people and make people laugh. 
                    When you go on his social media, you can find that he is into alot of different things such as: music, movies, games, and even books.
                    His content does not only make you laugh, but also inform you about the culture that he lives in.
                </p>
            </div>
            <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;