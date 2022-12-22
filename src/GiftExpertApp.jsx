//@ts-nocheck  
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch']);
  
  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;
    // categories.push('Valorant');
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, 'Valorant']);
  }

  return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory 
          onNewCategory={ onAddCategory }
        /> 
        { 
            categories.map( (category) => (
              <GifGrid 
                key={category} 
                category={category}/>
            ))
        }
    </>
  )
}
