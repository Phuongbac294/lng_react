import style from './item.module.css';

function ProductItem(prors) {
    return (
        <div className={style.item}>
            <div className={style.itemList}>
                <div className={style.itemImg} style={{backgroundImage: `url(${prors.img})`}}></div>
                
            </div>
        </div>
    )
}

export default ProductItem;