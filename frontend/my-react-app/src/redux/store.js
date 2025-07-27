import {configureStore} from "@reduxjs/toolkit";
import  userreducer from "./userSlice.js";
import messagereducer from "./messageSlice.js";

const store = configureStore({
    reducer:{
        user:userreducer,
        message: messagereducer,
    }
});
export default store;