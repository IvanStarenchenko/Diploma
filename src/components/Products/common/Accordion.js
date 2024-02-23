import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const AccordionClothesBlock = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <div className="catalog-filter__block">
            <div onClick={toggleAccordion} className="catalog-filter__name" aria-expanded={isOpen}>
            {title}
            </div>
            {isOpen && (
            <div className="menu__content" aria-hidden={!isOpen}>
                <div>
                <ul className="catalog-filter__list">
                    {items.map((item, index) => (
                    <li key={index} className="catalog-filter__item">
                        {item}
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            )}
        </div>
      </>
    );
};

export const AccordionColorsBlock = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <div className="catalog-filter__block ">
          <div onClick={toggleAccordion} className="catalog-filter__name catalog-filter__name--big" aria-expanded={isOpen}>
          {title}
          </div>
          {isOpen && (
          <div className="menu__content" aria-hidden={!isOpen}>
              <div>
                  <ul className="catalog-colors__list">
                      {items.map((item, index) => (
                      <li key={index} className="catalog-color__item">
                          <span className='catalog-color__name'>{item}</span>
                      </li>
                      ))}
                  </ul>
              </div>
          </div>
          )}
      </div>

    </>
  );
};

export const AccordionSizeBlock = ({items}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div class="catalog-filter__block">
        <div onClick={toggleAccordion} class="catalog-filter__name catalog-filter__name--big " aria-expanded={isOpen}>
            Size
        </div>
        {isOpen && (
          <div className="menu__content" aria-hidden={!isOpen}>
              <div>
                  <ul className="catalog-sizes__list">
                      {items.map((item, index) => (
                      <li key={index} className="catalog-sizes__item">
                          {item}
                      </li>
                      ))}
                  </ul>
              </div>
          </div>
          )}
        </div>
  )
}
export const AccordionPriceBlock = ({items , title}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState([0, 100]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const handleSliderChange = (newRange) => {
    setRange(newRange);
  };
  return (
    <div class="catalog-filter__block">
        <div onClick={toggleAccordion} className="catalog-filter__name catalog-filter__name--big" aria-expanded={isOpen}>
            Price
          </div>
        {isOpen && (
          <div className="menu__content" aria-hidden={!isOpen}>
              <div>
              <Slider
                  min={0}
                  max={1000} // Установите максимальное значение в соответствии с вашими требованиями
                  range
                  value={range}
                  onChange={handleSliderChange}
                />
              <div className='filter-price-block'><span className='filter-price'>${range[0]}</span>  <span className='filter-price'>${range[1]}</span> </div>
              </div>
          </div>
          )}
        </div>
  )
}
export const AccordionStyleBlock = ({items , title}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div class="catalog-filter__block">
        <div onClick={toggleAccordion} className="catalog-filter__name" aria-expanded={isOpen}>
            {title}
          </div>
        {isOpen && (
          <div className="menu__content" aria-hidden={!isOpen}>
              <div>
                  <ul className="catalog-style__list">
                      {items.map((item, index) => (
                      <li key={index} className="catalog-style__item">
                          {item}
                      </li>
                      ))}
                  </ul>
              </div>
          </div>
          )}
        </div>
  )
}


 
