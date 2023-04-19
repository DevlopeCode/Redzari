import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItem: [],
	cartTotalOuantity: 0,
	cartTotalAmount: 0,
	loginUser: {}
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, action) {
			const itemIndex = state.cartItem.findIndex(item => item.id === action.payload.id)
			if (itemIndex >= 0) {
				state.cartItem[itemIndex].cartQuantity += 1
			} else {
				const tempProduct = { ...action.payload, cartQuantity: 1 }
				state.cartItem.push(tempProduct);
			}
		},
		removeCart(state, action) {
			const nextCartItem = state.cartItem.filter(cartItem => cartItem.id !== action.payload.id)
			state.cartItem = nextCartItem;
		},
		decreaseCart(state, action) {
			const itemIndex = state.cartItem.findIndex((item => item.id === action.payload.id))
			if (state.cartItem[itemIndex].cartQuantity > 1) {
				state.cartItem[itemIndex].cartQuantity -= 1
			} else if (state.cartItem[itemIndex].cartQuantity === 1) {
				const nextCartItem = state.cartItem.filter(cartItem => cartItem.id !== action.payload.id)
				state.cartItem = nextCartItem;
			}
		},
		increaseCart(state, action) {
			const itemIndex = state.cartItem.findIndex((item) => item.id === action.payload.id)
			if (state.cartItem[itemIndex].cartQuantity >= 1) {
				state.cartItem[itemIndex].cartQuantity += 1
			}
		},
		emptyCart(state, action) {
			state.cartItem = []
		},
		getTotal(state, action) {
			let { total, quantity } = state.cartItem.reduce((cartTotal, cartItems) => {
				const { price, cartQuantity } = cartItems;
				const itemTotal = price * cartQuantity;

				cartTotal.total += itemTotal
				cartTotal.quantity += cartQuantity

				return cartTotal
			}, {
				total: 0,
				quantity: 0,
			});
			state.cartTotalOuantity = quantity;
			state.cartTotalAmount = total
		},
		authentication(state, action) {
			state.loginUser = action.payload
		}

	}
})

export const { addToCart, removeCart, decreaseCart, increaseCart, emptyCart, getTotal, authentication } = cartSlice.actions;
export default cartSlice.reducer;