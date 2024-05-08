import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DetailsAbout = (props) => {
    
//   const [isSize , setActiveSize] = useState(false)
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const colors = ['black', 'yellow', 'pink', 'red'];

    const [activeSize, setActiveSize] = useState(null);
    const [activeColor, setActiveColor] = useState(null);
    const { id } = useParams();
    const selectedItem = props.productById;
    const isItemInCart = props.cartContent.some(item => item.color === activeColor && item.size === activeSize); //

  

    const setItemToCart = (selectedItem) => {
        if (!isItemInCart) {
            props.addItemToCart(selectedItem);
            props.increaseSummury(selectedItem.itemPrice)
        } 
    };
    const delFromCart = (selectedItem , id) => {
        if(isItemInCart){
            props.deleteItemFromCart(id)
            props.decreaseSummury(selectedItem.price)
        }
    }
    const classSizeChange = (size) => {
        setActiveSize(size);
    };
    
    const classColorChange = (color) => {
        setActiveColor(color);
    };

    const handlePropertyChange = (id , newSize , newColor) => {
        props.changeProperty(id , newSize , newColor )
    }

 
    return (
        <div className="product-detail__about about-product">
            <div className="about-product__navigation">
                <a href="#">Shop</a>
                <NavLink to={`/${props.productById.category}`}>{props.productById.category}</NavLink>
                <a href="#">Top</a>
            </div>  

            <h3 className="about-product__title">{props.productById.productName}</h3>
            {/* {product.productName} */}
            <div className="about-product__rating rating-product">
                <div className="rating-product__stars">
                    <div className="star">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z" fill="#EDD146" />
                        </svg>
                    </div>
                    <div className="star">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z" fill="#EDD146" />
                        </svg>
                    </div>
                    <div className="star">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z" fill="#EDD146" />
                        </svg>
                    </div>
                    <div className="star">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z" fill="#EDD146" />
                        </svg>
                    </div>
                    <div className="star">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z" fill="#EDD146" />
                        </svg>
                    </div>
                </div>
                <div className="rating-product__comments">
                    <div className="comment">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                            <path d="M7.5 5.40552C7.08579 5.40552 6.75 5.7413 6.75 6.15552C6.75 6.56973 7.08579 6.90552 7.5 6.90552V5.40552ZM15.5 6.90552C15.9142 6.90552 16.25 6.56973 16.25 6.15552C16.25 5.7413 15.9142 5.40552 15.5 5.40552V6.90552ZM7.5 9.40552C7.08579 9.40552 6.75 9.7413 6.75 10.1555C6.75 10.5697 7.08579 10.9055 7.5 10.9055V9.40552ZM11.5 10.9055C11.9142 10.9055 12.25 10.5697 12.25 10.1555C12.25 9.7413 11.9142 9.40552 11.5 9.40552V10.9055ZM21.282 14.0635L21.9503 14.404V14.404L21.282 14.0635ZM20.408 14.9375L20.7485 15.6058L20.408 14.9375ZM20.408 1.3735L20.7485 0.70525L20.7485 0.70525L20.408 1.3735ZM21.282 2.24754L21.9503 1.90704V1.90704L21.282 2.24754ZM2.59202 1.3735L2.93251 2.04176L2.93251 2.04176L2.59202 1.3735ZM1.71799 2.24754L2.38624 2.58803L2.38624 2.58803L1.71799 2.24754ZM2.70734 18.5416L3.14003 19.1542L3.14011 19.1542L2.70734 18.5416ZM6.66989 15.742L6.23712 15.1295H6.23712L6.66989 15.742ZM1.59027 18.6331L2.20486 18.2032H2.20486L1.59027 18.6331ZM2.60335 18.6038L2.2683 17.9328L2.26829 17.9328L2.60335 18.6038ZM1.92692 18.8411L1.8173 19.5831H1.8173L1.92692 18.8411ZM2.66983 18.5675L2.26547 17.9358L2.26536 17.9359L2.66983 18.5675ZM2.64376 18.5831L2.2785 17.928L2.27845 17.9281L2.64376 18.5831ZM7.76828 15.1895L7.90589 15.9267L7.90589 15.9267L7.76828 15.1895ZM7.30048 15.3381L7.61351 16.0196L7.61352 16.0196L7.30048 15.3381ZM7.5 6.90552H15.5V5.40552H7.5V6.90552ZM7.5 10.9055H11.5V9.40552H7.5V10.9055ZM4.7 1.90552H18.3V0.405518H4.7V1.90552ZM20.75 4.35552V11.9555H22.25V4.35552H20.75ZM20.75 11.9555C20.75 12.5279 20.7494 12.9122 20.7252 13.208C20.7018 13.4952 20.6599 13.6324 20.6138 13.723L21.9503 14.404C22.1221 14.0667 22.1892 13.7101 22.2203 13.3302C22.2506 12.9591 22.25 12.5032 22.25 11.9555H20.75ZM18.3 15.9055C18.8477 15.9055 19.3035 15.9061 19.6747 15.8758C20.0546 15.8447 20.4112 15.7776 20.7485 15.6058L20.0675 14.2693C19.9769 14.3154 19.8396 14.3573 19.5525 14.3808C19.2566 14.4049 18.8724 14.4055 18.3 14.4055V15.9055ZM20.6138 13.723C20.4939 13.9582 20.3027 14.1494 20.0675 14.2693L20.7485 15.6058C21.2659 15.3421 21.6866 14.9214 21.9503 14.404L20.6138 13.723ZM18.3 1.90552C18.8724 1.90552 19.2566 1.9061 19.5525 1.93028C19.8396 1.95373 19.9769 1.99562 20.0675 2.04176L20.7485 0.70525C20.4112 0.533406 20.0546 0.466295 19.6747 0.435257C19.3035 0.404934 18.8477 0.405518 18.3 0.405518V1.90552ZM22.25 4.35552C22.25 3.80784 22.2506 3.35198 22.2203 2.98085C22.1892 2.60096 22.1221 2.24431 21.9503 1.90704L20.6138 2.58803C20.6599 2.67859 20.7018 2.81587 20.7252 3.103C20.7494 3.39887 20.75 3.78309 20.75 4.35552H22.25ZM20.0675 2.04176C20.3027 2.1616 20.4939 2.35283 20.6138 2.58803L21.9503 1.90704C21.6866 1.3896 21.2659 0.968902 20.7485 0.70525L20.0675 2.04176ZM4.7 0.405518C4.15232 0.405518 3.69646 0.404934 3.32533 0.435257C2.94544 0.466295 2.58879 0.533406 2.25153 0.70525L2.93251 2.04176C3.02307 1.99562 3.16035 1.95373 3.44748 1.93028C3.74336 1.9061 4.12757 1.90552 4.7 1.90552V0.405518ZM2.25 4.35552C2.25 3.78309 2.25058 3.39887 2.27476 3.103C2.29822 2.81587 2.3401 2.67859 2.38624 2.58803L1.04973 1.90704C0.877888 2.24431 0.810777 2.60096 0.779739 2.98085C0.749417 3.35198 0.75 3.80784 0.75 4.35552H2.25ZM2.25153 0.70525C1.73408 0.968902 1.31338 1.3896 1.04973 1.90704L2.38624 2.58803C2.50608 2.35283 2.69731 2.1616 2.93251 2.04176L2.25153 0.70525ZM18.3 14.4055H8.51639V15.9055H18.3V14.4055ZM3.14011 19.1542L7.10267 16.3545L6.23712 15.1295L2.27457 17.9291L3.14011 19.1542ZM0.75 17.8611C0.75 18.0608 0.749252 18.2622 0.764406 18.4278C0.77946 18.5923 0.817386 18.8366 0.97568 19.0629L2.20486 18.2032C2.27289 18.3005 2.26568 18.3731 2.25816 18.291C2.25499 18.2564 2.25258 18.2065 2.2513 18.1315C2.25002 18.0569 2.25 17.9701 2.25 17.8611H0.75ZM2.26829 17.9328C2.18118 17.9763 2.11175 18.0107 2.0523 18.0387C1.99244 18.0669 1.9529 18.0838 1.92597 18.0939C1.86294 18.1177 1.92374 18.0825 2.03654 18.0992L1.8173 19.5831C2.07835 19.6216 2.30366 19.5546 2.45491 19.4976C2.6054 19.4409 2.77432 19.3568 2.93841 19.2748L2.26829 17.9328ZM0.975679 19.0629C1.17274 19.3447 1.47716 19.5328 1.8173 19.5831L2.03654 18.0992C2.10457 18.1092 2.16545 18.1469 2.20486 18.2032L0.975679 19.0629ZM2.25 17.8611V4.35552H0.75V17.8611H2.25ZM2.27465 17.929C2.26983 17.9324 2.26637 17.9349 2.26338 17.937C2.26043 17.939 2.25887 17.9401 2.25804 17.9407C2.25672 17.9416 2.26002 17.9393 2.26547 17.9358L3.0742 19.1991C3.10147 19.1817 3.12688 19.1635 3.14003 19.1542L2.27465 17.929ZM2.9384 19.2748C2.95307 19.2675 2.9808 19.2539 3.00907 19.2381L2.27845 17.9281C2.28396 17.925 2.28751 17.9232 2.28623 17.9238C2.28538 17.9243 2.28372 17.9251 2.28053 17.9267C2.27732 17.9283 2.27354 17.9302 2.2683 17.9328L2.9384 19.2748ZM2.26536 17.9359C2.26971 17.9331 2.27403 17.9305 2.2785 17.928L3.00902 19.2381C3.03112 19.2258 3.05295 19.2127 3.0743 19.1991L2.26536 17.9359ZM8.51639 14.4055C8.16604 14.4055 7.8965 14.4026 7.63067 14.4522L7.90589 15.9267C8.00388 15.9084 8.1118 15.9055 8.51639 15.9055V14.4055ZM7.10266 16.3545C7.4331 16.1211 7.52294 16.0612 7.61351 16.0196L6.98745 14.6565C6.7417 14.7694 6.52325 14.9273 6.23712 15.1295L7.10266 16.3545ZM7.63067 14.4522C7.40869 14.4936 7.19265 14.5623 6.98745 14.6565L7.61352 16.0196C7.70679 15.9768 7.80499 15.9456 7.90589 15.9267L7.63067 14.4522Z" fill="#807D7E" />
                        </svg>
                    </div>
                    <p>120 comment</p>
                </div>
            </div>
            <div className="about-product__size size-product">
                <div className="size-product__text">
                    <h4 className="size-product__title">Select Size</h4>
                    <div className="size-product__guide">Size Guide</div>
                </div>
                <div className="size-product__sizes">
                {sizes.map((size) => (
                    <div
                    key={size}
                    className={activeSize === size  && 'size-active' }
                    onClick={() =>{ classSizeChange(size) ; handlePropertyChange(id , size , selectedItem.color)}}
                    >
                    {size}
                    </div>
                ))}
                </div>
            </div>
            <div className="about-product__colours colours-product">
                <h4 className="colours-product__title">Colours Available</h4>
                <div className="colours-product__colours">
                {colors.map((color) => (
                        <div
                        key={color}
                        className={activeColor === color  && 'color-active'}
                        onClick={() =>{ classColorChange(color) ; handlePropertyChange(id , selectedItem.size , color)}}
                        >
                        {color}
                        </div>
                ))}
                </div>
            </div>
            <div className="about-product__buttons buttons-product">
                <button className="buttons-product__add">
                    <div className="cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2.5 3.33334H3.00526C3.85578 3.33334 4.56986 3.97375 4.6621 4.81926L5.3379 11.0141C5.43014 11.8596 6.14422 12.5 6.99474 12.5H14.205C14.9669 12.5 15.6317 11.9834 15.82 11.2452L16.9699 6.73592C17.2387 5.68212 16.4425 4.65741 15.355 4.65741H5.5M5.52063 15.5208H6.14563M5.52063 16.1458H6.14563M14.6873 15.5208H15.3123M14.6873 16.1458H15.3123M6.66667 15.8333C6.66667 16.2936 6.29357 16.6667 5.83333 16.6667C5.3731 16.6667 5 16.2936 5 15.8333C5 15.3731 5.3731 15 5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333ZM15.8333 15.8333C15.8333 16.2936 15.4602 16.6667 15 16.6667C14.5398 16.6667 14.1667 16.2936 14.1667 15.8333C14.1667 15.3731 14.5398 15 15 15C15.4602 15 15.8333 15.3731 15.8333 15.8333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    {!isItemInCart
                        ? <button onClick={() => setItemToCart(selectedItem) }>Add to cart</button>
                        : <button onClick={() => delFromCart(selectedItem , id) } className="disabled">Remove from cart</button>
                    }
                </button>
                <div className="buttons-product__price">
                    <span id="xsPrice">{props.productById.price}$</span>
                </div>
            </div>
            <div className="about-product__advantages advantages-product">
                <div className="advantages-product__item">
                    <div className="advantages-product__img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <circle cx="22" cy="22" r="22" fill="#F6F6F6" />
                            <path d="M15 18.75H30M18 26.25H21M24 26.25H27M17.4 30H27.6C28.4401 30 28.8601 30 29.181 29.7956C29.4632 29.6159 29.6927 29.329 29.8365 28.9762C30 28.5751 30 28.0501 30 27V18C30 16.9499 30 16.4249 29.8365 16.0238C29.6927 15.671 29.4632 15.3841 29.181 15.2044C28.8601 15 28.4401 15 27.6 15H17.4C16.5599 15 16.1399 15 15.819 15.2044C15.5368 15.3841 15.3073 15.671 15.1635 16.0238C15 16.4249 15 16.9499 15 18V27C15 28.0501 15 28.5751 15.1635 28.9762C15.3073 29.329 15.5368 29.6159 15.819 29.7956C16.1399 30 16.5599 30 17.4 30Z" stroke="#3C4242" strokeWidth="1.1" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="advantages-product__text">Secure payment</div>
                </div>
                <div className="advantages-product__item">
                    <div className="advantages-product__img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <circle cx="22" cy="22" r="22" fill="#F6F6F6" />
                            <path d="M25.6349 30H18.3651C17.3613 30 16.5476 29.2007 16.5476 28.2147V21.5796C16.5476 21.0634 15.9122 20.8049 15.5406 21.1699C15.2014 21.5032 14.6205 21.3203 14.5417 20.8555L14.0248 17.8091C13.9021 17.0857 14.2422 16.3621 14.8825 15.9847L18.1965 14.0315C18.293 13.9746 18.4175 13.9966 18.4878 14.0829C20.2884 16.2938 23.7116 16.2938 25.5122 14.0829C25.5825 13.9966 25.707 13.9746 25.8035 14.0315L29.1175 15.9847C29.7578 16.3621 30.0979 17.0857 29.9752 17.8091L29.4583 20.8555C29.3795 21.3203 28.7986 21.5032 28.4594 21.1699C28.0878 20.8049 27.4524 21.0634 27.4524 21.5796V28.2147C27.4524 29.2007 26.6387 30 25.6349 30Z" stroke="#3C4242" strokeWidth="1.1" />
                        </svg>
                    </div>
                    <div className="advantages-product__text">Size & Fit</div>
                </div>
                <div className="advantages-product__item">
                    <div className="advantages-product__img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <circle cx="22" cy="22" r="22" fill="#F6F6F6" />
                            <path d="M23.8 26.6667V15.4667C23.8 15.2089 23.5985 15 23.35 15H13.45C13.2015 15 13 15.2089 13 15.4667V26.6667C13 26.9244 13.2015 27.1333 13.45 27.1333H14.8M23.8 26.6667C23.8 26.9244 23.5985 27.1333 23.35 27.1333H18.4M23.8 26.6667V18.2667C23.8 18.0089 24.0015 17.8 24.25 17.8H27.2136C27.333 17.8 27.4474 17.8492 27.5318 17.9367L30.8682 21.3967C30.9526 21.4842 31 21.6029 31 21.7266V26.6667C31 26.9244 30.7985 27.1333 30.55 27.1333H29.2M23.8 26.6667C23.8 26.9244 24.0015 27.1333 24.25 27.1333H25.6M14.8 27.1333C14.8 28.1643 15.6059 29 16.6 29C17.5941 29 18.4 28.1643 18.4 27.1333M14.8 27.1333C14.8 26.1024 15.6059 25.2667 16.6 25.2667C17.5941 25.2667 18.4 26.1024 18.4 27.1333M25.6 27.1333C25.6 28.1643 26.4059 29 27.4 29C28.3941 29 29.2 28.1643 29.2 27.1333M25.6 27.1333C25.6 26.1024 26.4059 25.2667 27.4 25.2667C28.3941 25.2667 29.2 26.1024 29.2 27.1333" stroke="#3C4242" strokeWidth="1.1" />
                        </svg>
                    </div>
                    <div className="advantages-product__text">Free shipping</div>
                </div>
                <div className="advantages-product__item">
                    <div className="advantages-product__img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <circle cx="22" cy="22" r="22" fill="#F6F6F6" />
                            <path d="M18.4444 28.2222C18.4444 29.2041 17.6485 30 16.6667 30C15.6848 30 14.8889 29.2041 14.8889 28.2222C14.8889 27.2404 15.6848 26.4444 16.6667 26.4444C17.6485 26.4444 18.4444 27.2404 18.4444 28.2222ZM18.4444 28.2222H25.5556C26.5374 28.2222 27.3333 27.4263 27.3333 26.4444V22.8889M25.5556 15.7778C25.5556 16.7596 26.3515 17.5556 27.3333 17.5556C28.3152 17.5556 29.1111 16.7596 29.1111 15.7778C29.1111 14.7959 28.3152 14 27.3333 14C26.3515 14 25.5556 14.7959 25.5556 15.7778ZM25.5556 15.7778H18.4444C17.4626 15.7778 16.6667 16.5737 16.6667 17.5556V21.1111M30 24.6667L27.6476 22.1398C27.474 21.9534 27.1926 21.9534 27.0191 22.1398L24.6667 24.6667M19.3333 19.3333L16.9809 21.8602C16.8074 22.0466 16.526 22.0466 16.3524 21.8602L14 19.3333" stroke="#3C4242" strokeWidth="1.1" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="advantages-product__text">Free Shipping & Returns</div>
                </div>
            </div>
        </div>
    )
}
export default DetailsAbout