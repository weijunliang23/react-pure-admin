// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { http} from '/src/utils/http'


export  interface  UserinfoType {
    nickname: string
    username:string | number
    userID: number
    profile: string
}
export interface UserState {
    info: UserinfoType | null
}


const initialState: UserState = {
    info: null
}

export const useUserStoreHook = ()=>{
    return initialState
}
export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
        const response = await http.get('/api/getUser')
        return response.data
    }
)
export const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.info = action.payload;
        })
    },
})

export const { setUserInfo } = UserSlice.actions

export default UserSlice.reducer
