"use client"

import {CheckBox} from "@/components/CheckBox/CheckBox"
import { filterAction } from "@/store/filter"
import { useDispatch, useSelector } from "react-redux"

const categories = [
    {
        id: 111,
        name: 'ბიზნესი'
    },
    {
        id: 222,
        name: 'უძრავი ქონება'
    },
    {
        id: 333,
        name: 'ტექნოლოგიები'
    }
]

export const Categories =  () => {
    const dispatch = useDispatch()
    const {filter} = useSelector((state:any) => state)

    return (
        <>
        {
            categories?.map((item: any) => {
                return (
                    <CheckBox 
                        key={item.id}
                        text={item.name}
                        type={'checkbox'}
                        name={item.id}
                        value={item.id}
                        onChange={  (e:any, key:number) => {
                            if (e.target.checked) {
                                dispatch(filterAction.changeCategories([...filter.categories, item.id]))
                            }
                        } }
                        />
                )
            })
        }
        </>
    )
}