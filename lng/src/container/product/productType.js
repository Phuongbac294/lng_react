import style from './product.module.css';
import ProductItem from './productItem';


const ProductType=(name, arr) =>{
      
    return (
        <div className={style.productType}>
            <div className={style.productTypeMenu}>
                <div className={style.menuItem}>{name}</div>
                <form >
                    <select className={style.menuItemSelect}>
                        <option value='up' selech>Giá tăng dần</option>
                        <option value='down'>Giá giảm dần</option>
                    </select>                
                </form>              
            </div>
            <div className={style.productTypeList}>
                {arr.map(item => 
                    ProductItem(item)
                )}
            </div>
        </div>
    )
}

export default ProductType;