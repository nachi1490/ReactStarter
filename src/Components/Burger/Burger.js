import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';
const burger = (props)=>{
    let transformedIngredients = [];
    let ingredients = Object.keys(props.ingredients);
    for(let ing in ingredients){
        for(let i = 0 ; i < props.ingredients[ingredients[ing]] ; i ++){
            transformedIngredients.push(<BurgerIngredients key={ingredients[ing] + i} type={ingredients[ing]}/>);
        }
    }
    // Alternate more modern way
    // let transformedIngredients = Object.keys(props.ingredients).map(igKey =>{
    //     return [...Array(props.ingredients[igKey])].map((_,val) =>{
    //         return  <BurgerIngredients key={igKey + val} type={igKey}/>;
    //     });
    // });
    return (
        <div className={classes.Burger}>  
            <BurgerIngredients type='bread-top'/> 
            {transformedIngredients}
            <BurgerIngredients type='bread-bottom'/>
        </div>
    );
}
export default burger;