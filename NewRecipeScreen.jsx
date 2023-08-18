import React, { useState } from "react";
import styles from "./NewRecipe.module.css";
import { Formik } from "formik";
import axios from "axios"

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const url = "https://recipes.devmountain.com";

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
  type: "",
  recipeName: "",
  imageURL: "",
  prepTime: "",
  cookTime: "",
  serves: "",
  ingredients: [],
  quantity: "",
  instructions: ""
  };

  
  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);
  };
  
  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    )
  });


    return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleChange, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className={styles.input_container}>
          <input
            placeHolder="Title your Recipe!"
            value={values.recipeName} 
            onChange={handleChange}
            name="recipeName"
          />
          <input 
            placeHolder="Paste an Image URL"
            value={values.imageURL} 
            onChange={handleChange}
            name="imageURL"
          />
        </div>
        <div className={styles.radio_container}>
          <span>
            <input 
              type="radio" 
              value="Cook" 
              onChange={handleChange}
              name="type"
            />
            <h5>Cook</h5>
          </span>
          <span>
            <input
              type="radio" 
              value="Bake" 
              onChange={handleChange}
              name="type"
            />
            <h5>Bake</h5>
          </span>
          <span>
            <input 
              type="radio" 
              value="Drink" 
              onChange={handleChange}
              name="type"
            />
            <h5>Drink</h5>
          </span>
        </div>
        <div className={styles.input_container}>
          <input 
            placeHolder="Prep Time"
            value={values.prepTime} 
            onChange={handleChange}
            name="prepTime"
          />
          <input 
            placeHolder="Cook Time"
            value={values.cookTime} 
            onChange={handleChange}
            name="cookTime"
          />
          <input 
            placeHolder="Serves"
            value={values.serves} 
            onChange={handleChange}
            name="serves"
          />
        </div>
        <h3>Ingredients</h3>
        <div className={styles.input_container}>
          <div className={styles.ingredients_inputs}>
            <input 
              placeHolder="Ingredient"
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
            <input 
              placeHolder="Quantity"
              value={quantity} 
              onChange={(e)  => setQuantity(e.target.value)}
            />
          </div>
          <ul>{ingredientDisplay}</ul>
        </div>
        <button
          type="button"
          className="orange-btn"
          onClick={addIngredient}
        >
          Add Another
        </button>
        <textarea
        placeHolder="Type your instructions"
        rows={5}
        value={values.instructions} 
        onChange={handleChange}
        name="instructions"
        />
        <button type="submit" className="blue-btn">
          Submit
        </button>
      </form>
      )}
      </Formik>
    </section>
    );
};

export default NewRecipeScreen;
