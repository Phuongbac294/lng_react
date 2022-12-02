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
                    <li className={style.headerListItem}>Đăng ký</li>
                    <li className={style.headerListItem}>Đăng nhập</li>                
                </ul>
            </div>
        </div>
    )
}

export default Header;