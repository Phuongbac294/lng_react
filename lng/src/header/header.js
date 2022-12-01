import style from './header.module.css'

function Header() {
    return (
        <div className={style.header}>
            <div className={style.headerMenu}>
                <ul className={style.headerList}>
                    <li className={style.headerListItem}>Trang chủ</li>
                    <li className={style.headerListItem}>Sản phẩm</li>
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