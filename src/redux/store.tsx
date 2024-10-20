import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { CartSlice } from "./slice/cart.slice";
import { ProductQueryApi } from "./query/Product.query";

export const store  = configureStore({
    reducer:{
        [CartSlice.name]:CartSlice.reducer,
        [ProductQueryApi.reducerPath]:ProductQueryApi.reducer
    },
    middleware(getDefaultMiddleware) {
       return getDefaultMiddleware().concat(ProductQueryApi.middleware)
    },
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch