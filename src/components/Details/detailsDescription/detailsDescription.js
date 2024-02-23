import descr from '../../../img/details/descr.png'
const DetailsDescription = () =>{
    return(
        <>
            <div className="product-description__inner">
                <div className="product-description__content content-product">
                    <div className="content-product__navigation navigation-content">
                        <div id="descriptionBtn" className="navigation-content__description border-bottom">Description</div>
                        <div id="commentsBtn" className="navigation-content__comments">User comments</div>
                        <div id="questionBtn" className="navigation-content__questions">Question & Answer</div>
                    </div>
                    <div className="content-product__main">
                        <div className="content-product__description description-inner" id="description">
                            <p className="description-inner__text">100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</p>
                            <div className="description-inner__table table-description">
                                <div className="table-description__item">
                                    <div className="table-description__overtitle">Fabric</div>
                                    <div className="table-description__title">Bio-washed Cotton</div>
                                </div>
                                <div className="table-description__item">
                                    <div className="table-description__overtitle">Pattern</div>
                                    <div className="table-description__title">Printed</div>
                                </div>
                                <div className="table-description__item">
                                    <div className="table-description__overtitle">Fit</div>
                                    <div className="table-description__title">Regular-fit</div>
                                </div>
                                <div className="table-description__item">
                                    <div className="table-description__overtitle">Neck</div>
                                    <div className="table-description__title">Round Neck</div>
                                </div>
                                <div className="table-description__item">
                                    <div className="table-description__overtitle">Sleeve</div>
                                    <div className="table-description__title">Half-sleeves</div>
                                </div>
                                <div className="table-description__item">
                                    <div className="table-description__overtitle">Style</div>
                                    <div className="table-description__title">Casual Wear</div>
                                </div>
                            </div>
                        </div>
                        <div className="content-product__comments comments-inner" id="comments">
                            <div className="comments-inner__items">
                                <div className="comments-inner__item item-comments">
                                    <img className="item-comments__img"></img>
                                    <div className="item-comments__username">Nick</div>
                                    <div className="item-comments__comment">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                                </div>
                                <div className="comments-inner__item item-comments">
                                    <img className="item-comments__img"></img>
                                    <div className="item-comments__username">Nick</div>
                                    <div className="item-comments__comment">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                                </div>
                            </div>
                            <div className="comments-inner__input">
                                <label >
                                    <p>Enter comment</p>
                                    <input type="text"/>
                                    <button type="submit"> Опубликовать</button>
                                </label>
                            </div>
                        </div>
                        <div className="content-product__question question-inner" id="question">
                            <div className="wrapper">
                                <div className="question-inner__menu js-accordion">
                                    <div className="question-inner__block js-accordion-block">
                                        <div className="question-inner__title js-accordion-trigger" aria-expanded="false">
                                            Вопрос
                                        </div>
                                        
                                        <div className="menu__content js-accordion-content" aria-hidden="true">
                                            <div>
                                                Lorem ipsum dolor sit amet consectetur adipisicing.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="question-inner__block js-accordion-block">
                                        <div className="question-inner__title js-accordion-trigger" aria-expanded="false">
                                            Вопрос
                                        </div>
                                        
                                        <div className="menu__content js-accordion-content" aria-hidden="true">
                                            <div>
                                                Lorem ipsum dolor sit amet consectetur adipisicing.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="question-inner__block js-accordion-block">
                                        <div className="question-inner__title js-accordion-trigger" aria-expanded="false">
                                            Вопрос
                                        </div>
                                        
                                        <div className="menu__content js-accordion-content" aria-hidden="true">
                                            <div>
                                                Lorem ipsum dolor sit amet consectetur adipisicing.
                                            </div>
                                        </div>
                                    </div>                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-description__video">
                    <img src={descr} alt=""/>
                </div>
            </div>
        </>
    )
}

export default DetailsDescription