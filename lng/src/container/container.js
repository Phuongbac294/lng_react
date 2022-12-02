import style from './container.module.css';
import Home from './home/home';
import Product from './product/product';
import {Routes, Route} from 'react-router-dom'

function Container() {
    return (
        <div className={style.container}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/product" element={<Product/>} />
            </Routes>            
        </div>
    )
}

export default Container;