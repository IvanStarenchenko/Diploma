import { connect } from "react-redux"
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom"
import { useEffect, useState } from 'react';
import { addItemToFav, deleteItemFromFav } from '../../../redux/favoriteReducer'

const DetailsSimilar = (props) => {
    const [addedItems, setAddedItems] = useState(new Set());

    const { id } = useParams();
    const isAdded = props.favoriteContent.some(item => item.id === parseInt(id));

    const setItemToFav = (item) => {
        props.addItemToFav(item);
        setAddedItems(prevItems => new Set([...prevItems, item.id]));
    };

    const deleteItem = (itemId) => {
        props.deleteItemFromFav(itemId);
        setAddedItems(prevItems => new Set([...prevItems].filter(id => id !== itemId)));
    };

    return (
        <div className="product-similar__cards" id="recommended">
            {props.product.map(item => (
                <div key={item.id} className="product-similar__card card-content">
                    {!addedItems.has(item.id)
                        ? <button className="card-content__fav" onClick={() => setItemToFav(item)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <circle cx="17.1291" cy="16.9111" r="16.1796" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.7198 12.7121C15.345 11.1099 13.0523 10.6789 11.3298 12.146C9.60723 13.6131 9.36472 16.0661 10.7174 17.8013C11.8422 19.244 15.2459 22.2867 16.3615 23.2716C16.4863 23.3817 16.5487 23.4368 16.6215 23.4585C16.685 23.4774 16.7545 23.4774 16.8181 23.4585C16.8909 23.4368 16.9533 23.3817 17.0781 23.2716C18.1936 22.2867 21.5974 19.244 22.7221 17.8013C24.0748 16.0661 23.8619 13.5977 22.1098 12.146C20.3576 10.6943 18.0946 11.1099 16.7198 12.7121Z" stroke="#3C4242" strokeWidth="1.26066" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        : <button className="card-content__fav" onClick={() => deleteItem(item.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="red" />
                            </svg>

                        </button>
                    }

                    <NavLink to={`/Description/${item.id}`} >
                        <img className="card-content__image" src={item.itemImageMain} alt='' />
                    </NavLink>

                    <div className="card-content__content">
                        <div className="card-content__text">
                            <div className="card-content__name">{item.productName}</div>
                            <div className="card-content__brand">{item.manufacturer}</div>
                        </div>
                        <div className="card-content__price">{item.price}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        product: state.catalog.products,
        favoriteContent: state.favorite.favoriteContent
    }
}

export default connect(mapStateToProps, { addItemToFav, deleteItemFromFav })(DetailsSimilar);


