import { useState } from 'react'
import descr from '../../../img/details/descr.png'
import CommentsReduxForm from './detailsCommentsForm'
import { useParams } from 'react-router-dom'
const DetailsDescription = (props) =>{
   
    const [activeDescItem, setDescItem] = useState(true)
    const [activeCommItem, setCommItem] = useState(false)
    const [activeQuestItem, setQuestItem] = useState(false)
    const { id } = useParams();
    const onSubmit = (formData ) => {
        console.log('DATA',formData )
        console.log('DATA', id )
        props.setComment(id, formData)
    }
    console.log(props.comments)
    return(
        <>
            <div className="product-description__inner">
                <div className="product-description__content content-product">
                    <div className="content-product__navigation navigation-content">
                        <div id="descriptionBtn" onClick={() => {setDescItem(true) ; setCommItem(false) ; setQuestItem(false) }} className={activeDescItem && 'navigation-content active' || 'navigation-content'}>Description</div>
                        <div id="commentsBtn" onClick={() => {setDescItem(false) ; setCommItem(true) ; setQuestItem(false) }} className={activeCommItem && 'navigation-content active' || 'navigation-content'}>User comments</div>
                        <div id="questionBtn" onClick={() => {setDescItem(false) ; setCommItem(false) ; setQuestItem(true) }} className={activeQuestItem && 'navigation-content active' || 'navigation-content'}>Question & Answer</div>
                    </div>
                    {
                        activeDescItem  
                        && 
                        <div className="content-product__main desc">
                        <div className="content-product__description description-inner" id="description">
                            <p className="description-inner__text">{props.productById.description}</p>
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
                    }
                    {
                        activeCommItem  
                        && 
                        <div className="content-product__comments comments-inner" id="comments">
                            <div className="comments-inner__items">
                                <div className="comments-inner__item item-comments">
                                {props.comments.map((comment, index) => (
                                    <div key={index}>
                                        {/* Рендеринг свойства comment из объекта */}
                                        {comment.comment}
                                        {/* Дополнительно можно рендерить другие свойства объекта, например, customerID */}
                                    </div>
                                ))}

                                </div>
                            </div>
                            <div >
                               <CommentsReduxForm onSubmit = {onSubmit}/>
                            </div>
                        </div>
                    }
                    {
                        activeQuestItem  
                        && 
                        <div className="content-product__main quest">

                        </div>
                    }
                    
                </div>
                <div className="product-description__video">
                    <img src={descr} alt=""/>
                </div>
            </div>
        </>
    )
}

export default DetailsDescription