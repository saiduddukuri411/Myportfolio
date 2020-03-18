import React,{Component} from 'react'; 
import Project from '../../components/project/project'
import classes from './projects.css'


class Projects extends Component{

    render(){
        return(

            <div className={classes.Projects}>
               <Project title="Burger_Builder"/>
               <Project title="Sorting_Visualizer"/>
               <Project title="Visualization_dashboard"/>
               <Project title="Parcel_Connect"/>
               <Project title="Burger_Builder"/>
               
            </div>
        )

    }
}

export default Projects;