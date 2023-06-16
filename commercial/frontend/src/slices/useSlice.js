import { USERS_URL } from "../constant";
import { apiSlice } from "@reduxjs/toolkit";




export const userApiSlice = apiSlice.injectEndpoints({

    endpoints : (builder) => ({

     login: builder.mutation({
             query: (data) => ({
                url:USERS_URL/auth,
                method:'POST',
                body:data
       })
     })
    })
})


export const {useLoginMutation} =  userApiSlice