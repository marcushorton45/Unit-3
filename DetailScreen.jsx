import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import DetailImage from "./DetailImage";
import axios from "axios";
import styles from "./Details.module.css";


const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const url = "https://recipes.devmountain.com";
  console.log(recipe);

  useEffect(() => {
    axios
    .get(`${url}/recipes/${id}`)
    .then((res) => {
    setRecipe(res.data);
    console.log(res.data.image_url)
    });
  }, []);

  

  return (
    <section>
      <DetailImage image={recipe.image_url} title={recipe.recipe_name} />
      <div className={styles.details_container}>
        <div className={styles.ingredients_container}>
        <h1>Recipe</h1>
        <h4>Prep Time: {recipe.prep_time}</h4>
        <h4>Cook Time: {recipe.cook_time}</h4>
        <h4>Serves: {recipe.serves}</h4>

        <h2>Ingredients</h2>
        {recipe.ingredients && recipe.ingredients.map((ing, index) => {
          return <h4>{ing.quantity} {ing.ingredients}</h4>
        })}
        </div>

        <div className={styles.instructions_container}>
          <h2>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{recipe.instructions && JSON.parse(recipe.instructions)}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;