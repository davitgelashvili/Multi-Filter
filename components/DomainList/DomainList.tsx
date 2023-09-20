"use client"

import styles from './DomainList.module.scss'
import dataApi from './../../data/data.json'
import { Item } from './Item/Item'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { userAction } from '@/store/user'

export const DomainList =  () => {
    const {filter} = useSelector((state:any) => state)
    const [favData, setFavData] = useState<any>([])
    const [count, setCount] = useState()
    const dispatch = useDispatch()

    let filtered = dataApi.filter((item:any)=> {
        return (
            (!filter.minPrice ||item.price >= filter.minPrice) && 
            (!filter.maxPrice || item.price <= filter.maxPrice) &&
            (!filter.minSymbol || item.name.length >= filter.minSymbol) && 
            (!filter.maxSymbol || item.name.length <= filter.maxSymbol) &&
            (!filter.zone.length || filter.zone.some( (it:any) => it === item.zone) ) &&
            (!filter.categories.length || filter.categories.some( (it:any) => it == item.categories) )
        )
    })

    useEffect(()=>{
        favData.length && localStorage.setItem('fav', JSON.stringify(favData) )
        dispatch( userAction.changeCount(count) )
    }, [favData, count])

    return (
        <div className={styles.list}>
            { 
                filtered && filtered.map((item:any)=>{
                    return (
                        <Item
                            key={item.id}
                            item={item}
                            setFavData={setFavData}
                            />
                    )
                })
            }
        </div>
    )
}