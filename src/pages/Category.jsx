import { useParams} from "react-router-dom";
import { selectshopData } from "../redux/shop/shopSelectors";
import {useSelector} from 'react-redux'

import CollectionItem from '../components/collection_item/collection_item.component'
import './category.styles.scss'

const CategoryPage = () =>{
    const {categoryId} = useParams();
    const data = useSelector(selectshopData)
    
    const {title, items} = data[categoryId]
    return(
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
            {
                items.map( item => <CollectionItem key={item.id} item={item} />)
            }
        </div>    
        </div>
    )
}

export default CategoryPage;