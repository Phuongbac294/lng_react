import style from './item.module.css';

const ProductItem = (prors) => {
    return (
        <div className={style.item}>
            <div className={style.itemList}>
                <div className={style.itemImg}>
                    <img src={prors.img} alt='anh bị lỗi'></img>
                </div>
                <div className={style.itemText}>
                    <h5 style={{color:'red'}}>{prors.amount} <span>{prors.unit}</span></h5>
                    <div>
                        <button className='btn'>Đặt hàng</button>
                        <button className='btn'>Chi tiết</button>
                    </div>
                    <h6 >Mã hàng :<span>{prors.id}</span></h6>
                    <h5 style={{color:'red'}}>{prors.name}</h5>
                </div>
                
            </div>
        </div>
    )
}

export default ProductItem;