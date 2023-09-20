"use client"

import {InputText} from "@/components/InputText/InputText"
import { filterAction } from "@/store/filter"
import { useDispatch, useSelector } from "react-redux"

export const Symbols =  () => {
    const dispatch = useDispatch()
    const {filter} = useSelector((state:any) => state)

    return (
        <div className='row'>
            <div className='col-6'>
                <InputText 
                    text={'დან'}
                    type={'text'}
                    name={'minSymbol'}
                    value={filter.minSymbol}
                    onChange={  (e:any) => {
                        dispatch(filterAction.changeMinSymbol(e.target.value))
                    } }
                    />
            </div>
            <div className='col-6'>
                <InputText 
                    text={'მდე'}
                    type={'text'}
                    name={'maxSymbol'}
                    value={filter.maxSymbol}
                    onChange={  (e:any) => {
                        dispatch(filterAction.changeMaxSymbol(e.target.value))
                    } }
                    />
            </div>
        </div>
    )
}