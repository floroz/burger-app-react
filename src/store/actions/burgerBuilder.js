import * as actionTypes from './actionTypes';

export const addIngredient = payload => {
	return {
		type: actionTypes.ADD_INGREDIENT,
		ingredientName: payload
	};
};

export const removeIngredient = payload => {
	return {
		type: actionTypes.REMOVE_INGREDIENT,
		ingredientName: payload
	};
};

export const setIngredients = ingredients => {
	return {
		type: actionTypes.SET_INGREDIENTS,
		ingredients: ingredients
	};
};

export const fetchIngredientsFailed = () => {
	return {
		type: actionTypes.SET_INGREDIENTS_FAIL
	};
};

export const initIngredients = () => {
	return {
		type: actionTypes.INIT_INGREDIENTS
	};
};
