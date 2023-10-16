import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addDataService, getDataService } from '../service/Service';

export const addDataSlice=createAsyncThunk("addData",async({formData})=>{
    try{
        const response= await addDataService({formData});
        return response
    }catch(error){
        throw error
    }
})

export const getDataSlice=createAsyncThunk("getData",async(page)=>{
    try{
        const response= await getDataService(page);
        return response;
    }catch(error){
        throw error;
    }
})

const initialState= {loading:false};

const DataSlice= createSlice({
    name:"dataSlice",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(addDataSlice.pending,(state,action)=>{
            state.loading=true;
        }).addCase(addDataSlice.fulfilled,(state,action)=>{
            state.loading=false;
        }).addCase(addDataSlice.rejected,(state,action)=>{
            state.loading=false;
        })
        .addCase(getDataSlice.pending,(state,action)=>{
            state.loading=true;
        }).addCase(getDataSlice.fulfilled,(state,action)=>{
            state.loading=false;
        }).addCase(getDataSlice.rejected,(state,action)=>{
            state.loading=false;
        })
    }
})

export default DataSlice.reducer;