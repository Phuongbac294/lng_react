import style from './product.module.css';
import ProductType from './.productType';

function Product() {
    return (
        <div className={style.Product}>
            <ProductType />

        </div>
    )
}

export default Product;