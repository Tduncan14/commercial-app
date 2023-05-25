import {PRODUCTS_URL} from "../constant"
import {apiSlice} from './apiSlice'
import {useParams} from 'react-router-dom'



export const productApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getProducts:builder.query({
            query:() =>({
                url:PRODUCTS_URL,
            }),
           keepUnusedDataFor:5
        }),

        getProductDetails:builder.query({
            query:(productId) => ({
                  url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor:5,
        })
    }),
})



// export const singleProductApiSlice = apiSlice.injectEndpoints({

//     endpoints:(builder) => ({
//          getProducts:builder.query({

//             query:() => ({
//                     url:`/api/products/${productId}`
//             }),
//             keepUnusedDataFor:5
//          })
//     })
// })

export const {useGetProductsQuery,useGetProductDetailsQuery} = productApiSlice

// export const {useSingleProductApiSlice} = singleProductApiSlice