import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name:'root',
    initialState: {
        maker:'Maker',
        flavor:'Flavor',
        year:'Year',
        rating:'Rating',
    },
    reducers: {
        chooseArtist: (state, action) => { state.maker = action.payload },
        chooseVenue: (state, action) => { state.flavor = action.payload },
        chooseDate: (state, action) => { state.year = action.payload },
        chooseUser: (state, action) => { state.rating = action.payload },
    }
})

export const reducer = rootSlice.reducer
export const { chooseArtist, chooseVenue, chooseDate, chooseUser } = rootSlice.actions