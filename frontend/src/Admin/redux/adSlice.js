import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';
export const getAds = createAsyncThunk('ad/getAds', async () => {
    const response = await fetch('http://127.0.0.1:8000/api/ads');
    const data = await response.json();
    return data;
});

export const addAd = createAsyncThunk('ad/addAd', async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch('http://127.0.0.1:8000/api/ads', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
        const ad = await response.data;
        if (response.status === 200) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Product Has been Added Successfully',
                showConfirmButton: false,
                timer: 1500
            })
        }
        return ad;
    }
    catch (error) {
        console.error(error);
        return rejectWithValue(error.message);
    }
});
const adSlice = createSlice({
    name: 'ad',
    initialState: {
        ads: [],
        loading: false,
    },
    extraReducers: {
        // Reducer for fetching ads
        [getAds.pending]: (state, action) => { 
            state.loading = true;
            console.log(action);
        },
        [getAds.fulfilled]: (state, action) => {
            state.ads = action.payload;
            state.loading = false;
            console.log(state.ads);
        },
        [getAds.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            console.log(state.ads);
        },
        // Reducer for adding ads
        [addAd.pending]: (state, action) => {
            state.loading = true;
            console.log(action);
        },
        [addAd.fulfilled]: (state, action) => {
            state.ads.push(action.payload);
            state.loading = false;
            console.log(state.ads);
        },
        [addAd.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            console.log(state.ads);
        }

    }
});

export default adSlice.reducer;


