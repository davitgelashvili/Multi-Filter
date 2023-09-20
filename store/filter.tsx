import { createSlice } from "@reduxjs/toolkit";

const initialData = {
    minPrice: '',
    maxPrice: '',
    minSymbol: '',
    maxSymbol: '',
    zone: [],
    categories: [],
}

const filter = createSlice({
    name: 'filter',
    initialState: initialData,
    reducers: {
        changeMinPrice(state, action) {
            state.minPrice = action.payload
        },
        changeMaxPrice(state, action) {
            state.maxPrice = action.payload
        },
        changeMinSymbol(state, action) {
            state.minSymbol = action.payload
        },
        changeMaxSymbol(state, action) {
            state.maxSymbol = action.payload
        },
        changeZone(state, action) {
            state.zone = action.payload
        },
        changeCategories(state, action) {
            state.categories = action.payload
        }
    }
})

export const filterAction = filter.actions

export default filter.reducer