import style from './header.module.css'
import {Link} from 'react-router-dom'


function Header() {
    
    return (
        <div className={style.header}>
            <div className={style.headerMenu}>
                <ul className={style.headerList}>
                <li className={style.headerListItem}>VIETNAM LNG ENERGY</li>
                </ul>
                <ul className={style.headerList}>  
                    <li className={style.headerListItem}><Link to="/" >Home</Link></li>
                    <li className={style.headerListItem}><Link to="/product" >Product</Link></li>
                    <li className={style.headerListItem}><Link to="/convert" >Convert</Link></li>                  
                    {/* { usename === ''? 
                    <> */}
                        <li className={style.headerListItem}><Link to="/register" >Register</Link></li>
                        <li className={style.headerListItem}><Link to="/login" >Login</Link></li>  
                    {/* </>  :
                    <>
                        <li className={style.headerListItem}>usename</li>
                        <li className={style.headerListItem}>Đơn hàng</li>
                    </>   }             */}

                </ul>
            </div>
        </div>
    )
}

export default Header;