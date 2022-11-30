import style from './container.module.css';
import Home from './home/home';
import Product from './product/product';

function Container() {
    return (
        <div className={style.container}>
            <Home/>
            <Product/>
        </div>
    )
}

export default Container;