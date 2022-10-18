import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import axios from 'axios';

// api calls

export const getRepos = createAsyncThunk('fetch/repos', async (_, thunkApi) => {
  const {rejectWithValue} = thunkApi;
  try {
    return await axios.get(
      'https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc',
    );
  } catch (err) {
    return rejectWithValue(err);
  }
});

// states
const initialState = {
  repos: [],
  loading: false,
  error: false,
};

// reducer
const eventsSlices = createSlice({
  name: 'repos/list',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getRepos.pending]: (state, action) => {
      state.repos = [];
      state.loading = true;
      state.error = false;
    },
    [getRepos.fulfilled]: (state, action) => {
      state.repos = action.payload;
      state.loading = false;
      state.error = false;
    },
    [getRepos.rejected]: (state, action) => {
      state.repos = [];
      state.loading = false;
      state.error = true;
    },
  },
});

export default eventsSlices.reducer;
