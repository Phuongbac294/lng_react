import style from './product.module.css';
// import { useState } from 'react';
import ProductType from './productType';
import { gas, cooker, gasValve } from '../../context/const';

function Product() {

    return (
        <div className={style.Product}>
            {ProductType('Khí LPG', gas)}
            {ProductType('Thiết bị bếp gas', cooker)}
            {ProductType('Van gas', gasValve)}
        </div>
    )
}

export default Product;