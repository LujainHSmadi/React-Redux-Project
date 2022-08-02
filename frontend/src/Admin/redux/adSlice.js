import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2';
export const getAds = createAsyncThunk('ad/getAds', async () => {
    const response = await fetch('http://127.0.0.1:8000/api/ads');
    const data = await response.json();
    return data;
});


export const addAd = createAsyncThunk('ad/addAd', async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/ads', data);
        const ad = await response.data;
        // console.log('add', ad);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        return ad;
    }
    catch (error) {
        console.error(error);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        return rejectWithValue(error.message);
    }
});

export const editAd = createAsyncThunk('ad/editAd', async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const id = data.params;
    console.log('edit', data.params);
    try {
        const response = await axios.put(`http://127.0.0.1:8000/api/ads/${id}`, data.formData);
        const ad = await response.data;

        console.log('omar', ad);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        return ad;

    }
    catch (error) {
        console.error(error);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        return rejectWithValue(error.message);

    }
});



export const deleteAd = createAsyncThunk('ad/deleteAd', async (id) => {
    // const { rejectWithValue } = thunkAPI;
    console.log('id', id);
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/ads/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        console.log('delete', id);
        
        const res = response.json();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Has been deleted Successfully',
            showConfirmButton: false,
            timer: 1500
        })
        return res;


    }
    catch (error) {
        console.error(error);
        // return rejectWithValue(error.message);
    }
});


export const singleAd = createAsyncThunk('ad/singleAd', async (data) => {

    try {
        const response = await fetch(`http://127.0.0.1:8000/api/ads/${data}`);
        const sdata = await response.json();
        console.log("sdata", sdata)
        return sdata;
    }
    catch (error) {
        console.error(error);
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
            console.log("lyuj", state.ads);
        },
        [addAd.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            console.log(state.ads);
        },

        // Reducer for editing ads
        [editAd.pending]: (state, action) => {
            state.loading = true;
            console.log(action);
        },
        [editAd.fulfilled]: (state, action) => {
            console.log("amaaaaaaaa2222l", action.payload);
            const { id } = action.payload;
            console.log("amaaaaaaaal", id);
           
            const ad = state.ads.ads.find(ad => ad.id === id);
            // if (ad) {

                ad.title = action.payload.title;
                ad.description = action.payload.description;
                ad.type = action.payload.type;
                ad.image = action.payload.image;
                ad.image_2 = action.payload.image_2;
                ad.image_3 = action.payload.image_3;
                ad.image_4 = action.payload.image_4;
                ad.location = action.payload.location;
                ad.phone = action.payload.phone;

            // }
            return ad;

        },
        [editAd.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            console.log(state.ads);
        },
        // Reducer for deleting ads
        [deleteAd.pending]: (state, action) => {
            state.loading = true;
            console.log(action);
        }
        ,
        [deleteAd.fulfilled]: (state, action) => {
            state.ads = state.ads.filter(ad => ad.id !== action.payload);
            state.loading = false;
            console.log(state.ads);
        },
        [deleteAd.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            console.log(state.ads);
        },
        // Reducer for fetching single ad
        [singleAd.pending]: (state, action) => {
            state.loading = true;
            console.log(action);
        },
        [singleAd.fulfilled]: (state, action) => {
            state.ads = action.payload;
            state.loading = false;
            console.log(state.ad);
        },
        [singleAd.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            console.log(state.ad);
        }


    }

});

export default adSlice.reducer;


