import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const users = createAsyncThunk(
    "data/users",
    async () => {
        const response = await axios.get('http://localhost:4000/api/data');
        return response.data;
    }
);
