import { combineReducers } from "@reduxjs/toolkit";

import contactsSlice from "./contacts/contacts-slice";
import filterSlice from "./filter/filter-slice";
import authSlice from "./auth/auth-slice";

const rootReducer = combineReducers({
    auth: authSlice,
    contacts: contactsSlice,
    filter: filterSlice,
})



export default rootReducer;