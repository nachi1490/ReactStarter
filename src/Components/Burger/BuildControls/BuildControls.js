import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad',type:'salad'},
    {label:'Meat',type:'meat'},
    {label:'Cheese',type:'cheese'},
    {label:'Bacon',type:'bacon'}
];
const buildControls = (props) =>{

    return (
        <div className={classes.BuildControls}>
            {
                controls.map(key =>{
                 return <BuildControl 
                 moreClick={(type) =>props.moreClick(key.type)} 
                 lessClick = {(type) => props.lessClick(key.type)}
                 key= {key.label} label={key.label}/>;
            })};
            
        </div>
    );
}

export default buildControls;