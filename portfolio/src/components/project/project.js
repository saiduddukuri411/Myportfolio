import React from 'react'
import Burger_Builder from '../../assets/images/Burger_Builder.png'
import classes from './project.css'
import Sorting_Visualizer from '../../assets/images/Sorting_Visualizer.png'
import Visualization_dashboard from '../../assets/images/Visualization_dashboard.png'
import Parcel_Connect from '../../assets/images/Parcel_Connect.png'

const project=(props)=>{
  
    return(
        props.title==="Burger_Builder" ?(<div className={classes.Project}>
            <img src={Burger_Builder} alt="Myburger" />
        </div>): props.title==="Sorting_Visualizer" ? (<div className={classes.Sor_Project}>
            <img src={Sorting_Visualizer} alt="visualizer" />
        </div>): props.title==="Visualization_dashboard" ?(<div className={classes.Vis_Project}>
            <img src={Visualization_dashboard} alt="visualizer" />
        </div>): props.title==="Parcel_Connect" ?(<div className={classes.Sor_Project}>
            <img src={Parcel_Connect} alt="visualizer" />
        </div>):null
        
    )
}


export default project;