import { NavLink } from "react-router-dom"

const Catalog = (props) => {
    return (
        <div className="catalog-products__cards" id="recommended">
            {props.items.map(item => (
                <NavLink to={`/Description/${item.id}`} className="catalog-products__card card">
                    <img className="card__image" src={item.itemImageMain} alt='' />

                    <div className="card__fav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <circle cx="17.1291" cy="16.9111" r="16.1796" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.7198 12.7121C15.345 11.1099 13.0523 10.6789 11.3298 12.146C9.60723 13.6131 9.36472 16.0661 10.7174 17.8013C11.8422 19.244 15.2459 22.2867 16.3615 23.2716C16.4863 23.3817 16.5487 23.4368 16.6215 23.4585C16.685 23.4774 16.7545 23.4774 16.8181 23.4585C16.8909 23.4368 16.9533 23.3817 17.0781 23.2716C18.1936 22.2867 21.5974 19.244 22.7221 17.8013C24.0748 16.0661 23.8619 13.5977 22.1098 12.146C20.3576 10.6943 18.0946 11.1099 16.7198 12.7121Z" stroke="#3C4242" strokeWidth="1.26066" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className="card__content">
                        <div className="card__text">
                            <div className="card__name">{item.itemName}</div>

                            <div className="card__brand">{item.itemBrand}</div>
                        </div>

                        <div className="card__price">{item.itemPrice}</div>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}

export default Catalog