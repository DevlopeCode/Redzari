import { loginStart, loginSuccess, loginFailure,signupStart,signupFailure,signupSuccess, logout } from "./userRedux";
import axios from "axios";
import {
  getProductStart,
  getSingleProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
} from "./productRedux";
import { publicRequest ,userRequest, getProductRequest} from "../../requestMethods";
// import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const signup = async (dispatch, user) => {
  dispatch(signupStart());
  try {
    const response = await publicRequest.post("auth/register", user);
    dispatch(signupSuccess(response.data));
  } catch (error) {
    dispatch(signupFailure());
  }
};


export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try { 
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://redzari-backend.onrender.com/api/products/find',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        dispatch(getProductSuccess(response.data.products));
        console.log(response.data.products)
      })
      .catch((error) => {
        console.log(error); 
      });
    // const { products } = response.data;
    // dispatch(getProductSuccess(products));
  } catch (error) {
    dispatch(getProductFailure());
  }
};


export const deleteProduct = async (dispatch, productId) => {
  dispatch(deleteProductStart());
  try {
    // await userRequest.delete(`/products/${productId}`);
    dispatch(deleteProductSuccess(productId));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};


export const updateProduct = async (dispatch, id, product) => {
  dispatch(getProductStart());
  try {
    await userRequest.put(`/products/${product._id}`, product);
    dispatch(getProductSuccess({ id: id, product: product }));
  } catch (error) {
    dispatch(getProductFailure());
  }
};



export const addProduct = async (product, dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await userRequest.post("/products", product);
    dispatch(getProductSuccess(res.data));
  } catch (error) {
    
    (getProductFailure());
  }
};



export const getSingleProducts = async (dispatch,id) => {
  dispatch(getSingleProductStart());
  try {
    // let config = {
    //   method: 'get',
    //   maxBodyLength: Infinity,
    //   url: 'https://redzari-backend.onrender.com/api/products/details?id=6440addcce1d16d6d6762fb8',
    //   headers: {}
    
    // };

    // axios.request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // const { products } = response.data;
    let response = await userRequest.get(`products/details?id=${id}`)
    console.log("====",response.data);

    dispatch(getProductSuccess(response.data));
  } catch (error) {
    dispatch(getProductFailure());
  }


  
};


      
export const logoutUser=async(dispatch)=>{
await  localStorage.clear()
dispatch(logout)
}