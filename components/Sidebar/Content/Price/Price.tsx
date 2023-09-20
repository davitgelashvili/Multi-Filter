"use client"

import {InputText} from "@/components/InputText/InputText"
import { filterAction } from "@/store/filter"
import { useDispatch, useSelector } from "react-redux"

export const Price =  () => {
    const dispatch = useDispatch()
    const {filter} = useSelector((state:any) => state)

    return (
        <div className='row'>
            <div className='col-6'>
                <InputText 
                    text={'დან'}
                    type={'text'}
                    name={'minPrice'}
                    value={filter.minPrice}
                    onChange={  (e:any) => {
                        dispatch(filterAction.changeMinPrice(e.target.value))
                    } }
                    />
            </div>
            <div className='col-6'>
                <InputText 
                    text={'მდე'}
                    type={'text'}
                    name={'maxPrice'}
                    value={filter.maxPrice}
                    onChange={ (e:any) => {
                        dispatch(filterAction.changeMaxPrice(e.target.value))
                    } }
                    />
            </div>
        </div>
    )
}