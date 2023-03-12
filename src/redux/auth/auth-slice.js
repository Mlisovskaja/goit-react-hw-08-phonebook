import { createSlice } from "@reduxjs/toolkit";

import { signup, login, logout, current } from "./auth-operations";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,
}

const authSlice = createSlice({
name: 'auth',
  initialState,
    extraReducers: (builder) => {
        builder
    .addCase(signup.pending, (store) => {
      store.loading = true;
      store.error = null;
    })
    .addCase(signup.fulfilled, (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    })
    .addCase(signup.rejected, (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    })

     .addCase(login.pending, (store) => {
      store.loading = true;
      store.error = null;
    })
     .addCase(login.fulfilled, (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    })
    .addCase(login.rejected, (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    })

     .addCase(logout.pending, (store) => {
      store.loading = true;
      store.error = null;
    })
     .addCase(logout.fulfilled, (store) => {
      store.loading = false;
      store.user = {};
      store.token = '';
      store.isLogin = false;
    })
     .addCase(logout.rejected, (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    })

     .addCase(current.pending, (store) => {
      store.loading = true;
      store.error = null;
    })
    .addCase(current.fulfilled, (store, { payload }) => {
      store.loading = false;
      store.user = payload;
      store.isLogin = true;
    })
     .addCase(current.rejected, (store, { payload }) => {
      store.loading = false;
      store.token = '';
      store.error = payload;
    })
  },
})

export default authSlice.reducer;
