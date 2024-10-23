import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/UserReducer";

export default configureStore({
    reducer: {
        user: userReducer,
    },
    });