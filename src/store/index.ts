import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './test'
import UserReducer from './user'
// ...
// import additionalMiddleware from 'additional-middleware'

export const store: any = configureStore({
    reducer: {
        count: counterReducer,
        user: UserReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch