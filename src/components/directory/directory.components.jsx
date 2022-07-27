import {React, Component} from "react";
import MenuItem from "../menu-item/menuitem.components";
import "./directory.styles.scss"
import Dir_data from "./dir-data";

class Directory extends Component{
    constructor(){
        super();

        this.state = {
            sections: Dir_data
              
        }

    }

    render() {
        return(
            <div className="directory-menu">
                {this.state.sections.map( ({title, id,imageUrl, size,...props}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        )
    }
}
export default Directory;