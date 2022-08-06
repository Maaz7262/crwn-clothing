import {React} from "react";
import MenuItem from "../menu-item/menuitem.components";

import {connect} from "react-redux"
import selectDirectory from "../../redux/directory/dirSelectors";
import {createStructuredSelector} from "reselect"

import "./directory.styles.scss"


const Directory = ({sections})=>{
    
        return(
            <div className="directory-menu">
                {sections.map( ({title, id,imageUrl, size,linkUrl}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                ))}
            </div>
        )
    
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectory
})
export default connect(mapStateToProps) (Directory);