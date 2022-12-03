import style from './header.module.css'
import {Link} from 'react-router-dom'


function Header() {
    
    return (
        <div className={style.header}>
            <div className={style.headerMenu}>
                <ul className={style.headerList}>
                    <li className={style.headerListItem}><Link to="/" >Trang chủ</Link></li>
                    <li className={style.headerListItem}><Link to="/product" >Sản phẩm</Link></li>
                    <li className={style.headerListItem}>Liên hệ</li>
                </ul>
                <ul className={style.headerList}>  
                    {/* { usename === ''? 
                    <> */}
                        <li className={style.headerListItem}><Link to="/register" >Đăng ký</Link></li>
                        <li className={style.headerListItem}><Link to="/login" >Đăng nhập</Link></li>  
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