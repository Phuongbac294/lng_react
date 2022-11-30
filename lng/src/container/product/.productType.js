import style from './product.module.css';
import ProductItem from './productItem';

function ProductType(prors) {
    return (
        <div className={style.productType}>
            <div className={style.productTypeMenu}>
                <div className={style.menuItem}>Khí LPG</div>
                <form >
                    <select className={style.menuItemSelect}>
                        <option value='up' selech>Giá tăng dần</option>
                        <option value='down'>Giá giảm dần</option>
                    </select>                
                </form>              
            </div>
            <div className={style.productTypeList}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    )
}

export default ProductType;