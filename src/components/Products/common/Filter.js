import {AccordionClothesBlock , AccordionColorsBlock , AccordionSizeBlock , AccordionPriceBlock, AccordionStyleBlock} from './Accordion';


const Filter = () => {
  const accordionClothesData = [
    { title: 'Printed T-shirts', items: ['item1', 'item2', 'item3'] },
    { title: 'Plain T-shirts', items: ['item1', 'item2', 'item3'] },
    { title: 'Kurti', items: ['item1', 'item2', 'item3'] },
    { title: 'Boxers', items: ['item1', 'item2', 'item3'] },
    { title: 'Full sleeve T-shirts', items: ['item1', 'item2', 'item3'] },
    { title: 'Joggers', items: ['item1', 'item2', 'item3'] },
    { title: 'Payjamas', items: ['item1', 'item2', 'item3'] },
    { title: 'Jeans', items: ['item1', 'item2', 'item3'] },
  ];
  const accordionStylesData = [
    { title: 'Classic', items: ['item1', 'item2', 'item3'] },
    { title: 'Casual', items: ['item1', 'item2', 'item3'] },
    { title: 'Business', items: ['item1', 'item2', 'item3'] },
    { title: 'Boxers', items: ['item1', 'item2', 'item3'] },
    { title: 'Sport', items: ['item1', 'item2', 'item3'] },
    { title: 'Elegant', items: ['item1', 'item2', 'item3'] },
    { title: 'Formal (evening)', items: ['item1', 'item2', 'item3'] },
  ];
  const accordionColorsData = [
    { title: 'Colors', items: ['Purple', 'Black', 'Red', 'Orange',
                                'Navy', 'White', 'Broom', 'Green',
                                'Yellow', 'Grey', 'Pink', 'Blue',] },
  ];
  const accordionSizeData = [
    { items: ['XXS', 'XL', 'XS', 'S',
             'M', 'L', 'XXL', '3XL','4XL'] },
                                
  ];

  return (
    <div className="catalog-filter">
      <h3 class="catalog-filter__title">Filter</h3>
      <div className="catalog-filter__settings">
        <div className='wrapper'>
            <div className='filter-menu__clothing'>
                {accordionClothesData.map((data, index) => (
                <AccordionClothesBlock key={index} title={data.title} items={data.items} />
                ))}
            </div>
            <div className='filter-menu__colors'>
                {accordionColorsData.map((data, index) => (
                <AccordionColorsBlock key={index} title={data.title} items={data.items} />
                ))}
            </div>
            <div className='filter-menu__price'>
                <AccordionPriceBlock />
            </div>
            <div className='filter-menu__size'>
                {accordionSizeData.map((data, index) => (
                  <AccordionSizeBlock key={index} items={data.items} />
                ))}
            </div>
            <div className='filter-menu__style'>
                {accordionStylesData.map((data, index) => (
                  <AccordionStyleBlock key={index} title = {data.title} items={data.items} />
                ))}
            </div>
        </div>
      </div>
      {/* Другие блоки фильтров */}
    </div>
  );
};

export default Filter