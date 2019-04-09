import React from "react";
import classes from "./Order.css";

const order = props => {
  const ingredients = [];
  console.log(ingredients);

  for (let key in props.ingredients) {
    let quantity = props.ingredients[key];
    ingredients.push({
      name: key,
      amount: quantity
    });
  }
  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 .8rem",
          border: "1px solid #ccc",
          padding: ".5rem"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
