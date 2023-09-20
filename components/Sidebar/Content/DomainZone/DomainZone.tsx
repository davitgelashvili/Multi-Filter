"use client"

import {CheckBox} from "@/components/CheckBox/CheckBox"
import { filterAction } from "@/store/filter"
import { useDispatch, useSelector } from "react-redux"

const domainZone = [
    {
        id: 1498,
        name: 'ge'
    },
    {
        id: 268,
        name: 'com.ge'
    },
    {
        id: 368,
        name: 'net.ge'
    },
    {
        id: 4986,
        name: 'edu.ge'
    }
]

export const DomainZone =  () => {
    const dispatch = useDispatch()
    const {filter} = useSelector((state:any) => state)

    return (
        <>
        {
            domainZone?.map((item: any) => {
                return (
                    <CheckBox 
                        key={item.id}
                        text={item.name}
                        type={'checkbox'}
                        name={item.name}
                        value={item.name}
                        onChange={  (e:any, key:number) => {
                            if (e.target.checked) {
                                dispatch(filterAction.changeZone([...filter.zone, item.name]))
                            }
                        } }
                        />
                )
            })
        }
        </>
    )
}