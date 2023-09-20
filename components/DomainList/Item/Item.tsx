"use client"

import styles from './Item.module.scss'

export const Item =  ({item, setFavData}: any) => {

    return (
        <div className={styles.item}>
            <div>
                <h1 className={styles.name}>{item.name}.{item.zone}</h1>
            </div>
            <div>
                <p className={styles.price}>{item.price} ლ</p>
                {
                    JSON.parse(localStorage.fav) && JSON.parse(localStorage.fav).find((it:any) => it.id == item.id) ? (
                        <button
                            >
                            დამატებულია !!!
                        </button>
                    ) : (
                        <button
                            onClick={ () => {
                                setFavData((perv:any) => [...perv, item])          
                            }}
                            >
                            დამატება
                        </button>
                    )
                }
            </div>
        </div>
    )
}