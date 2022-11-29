import style from './footer.module.css';

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.footerNav}>
                <h2 className={style.footerH2}>Công ty cổ phần năng lượng LNG Việt Nam</h2>
                <div className={style.footerMenu}>
                    <ul className={style.footerList}>
                        <li>Địa chỉ: Thôn Đình Cả, xã Nội Duệ, huyện Tiên Du, tỉnh Bắc Ninh</li>
                        <li>MST : 027 084 546 123</li>
                        <li>STK : 0123 4567 8901 tại NH MBbank </li>
                    </ul>
                    <ul className={style.footerList}>
                        <li>Email : lngvietnam@gmail.com</li>
                        <li>Hotline : 0914999030 </li>
                        <li>Facebook : LNGVietNam </li>
                    </ul>
                </div>
            </div>                
        </div>
    )
}

export default Footer;