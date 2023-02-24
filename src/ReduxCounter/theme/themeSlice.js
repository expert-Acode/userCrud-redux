import { createSlice } from '@reduxjs/toolkit';

const initialState={
    color:""
}

const themeSlice=createSlice({
    name:"color",
    initialState,
    reducers:{
        colorChange:(state,action)=>{
            state.color = action.payload
            
        }
    }
})

export const {colorChange}=themeSlice.actions

export default themeSlice.reducer