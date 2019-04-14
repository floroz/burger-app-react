import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.css";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients) // [salad, meat...]
    .map(ingredientName => {
      return [...Array(props.ingredients[ingredientName])].map((_, i) => {
        //Make array of element which count is exact equals to number of ingredient for adding. Next, iterate and generate ingredients.
        return <BurgerIngredient type={ingredientName} key={i} />;
      });
    })
    .filter(singleIngredientArray => {
      return singleIngredientArray.length > 0;
    });
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
