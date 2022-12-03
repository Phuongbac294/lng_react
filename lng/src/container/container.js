import style from './container.module.css';
import Home from './home/home';
import Product from './product/product';
import {Routes, Route} from 'react-router-dom'
import Login from '../login/login';
import Register from '../login/register';

function Container() {
    return (
        <div className={style.container}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/product" element={<Product/>} /> 
                <Route path="/register" element={<Register/>} />               
                <Route path="/login" element={<Login/>} />
            </Routes>            
        </div>
    )
}

export default Container;