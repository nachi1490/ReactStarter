import React, { Component } from 'react'
import Aux from '../../Hoc/aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
class BurgerBuilder extends Component {

    state = {
        ingredients : {
            'salad':0,
            'meat':0,
            'bacon':0,
            'cheese':0
        }
    };
    
    moreClickHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] = ingredients[type] + 1;
        this.setState( { ingredients: ingredients } );
      }

    lessClickHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] = ingredients[type] > 0 ? ingredients[type] - 1 : 0;
        this.setState( { ingredients: ingredients } );
      }
    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls moreClick={this.moreClickHandler} lessClick = {this.lessClickHandler}/>
            </Aux>
        );
    }
}
export default BurgerBuilder;