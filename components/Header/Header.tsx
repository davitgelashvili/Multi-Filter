"use client"

import { useEffect, useState } from "react"
import styles from './Header.module.scss'
import { useDispatch, useSelector } from "react-redux"
import { userAction } from "@/store/user"

export const Header =  () => {
    const {user} = useSelector((state:any) => state)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(localStorage.fav) {
            dispatch(userAction.changeCount(JSON.parse(localStorage.fav).length))
        }else {
            dispatch(userAction.changeCount(0))
        }
    }, [user])
    return (
        <header className={styles.header}>
            <div>{user.count}</div>
        </header>
    )
}