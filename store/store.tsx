import { configureStore } from "@reduxjs/toolkit"; 
import filter from "./filter";
import user from "./user";

export const store = configureStore({
    reducer: {
        filter,
        user
    }
})