import React from 'react';

import FilterForm from './filter_form';
import ProductIndex from './product_index';
import ProductMap from './../product_map/product_map';

const Search = ({ products, minSeating, maxSeating, updateFilter }) => (
  <div className="user-pane">
    <div className="left-half">
      <h5>Click Map to Add Product!</h5>
      <ProductMap
        products={products}
        updateFilter={updateFilter}
        singleProduct={false}
      />
    </div>
    <div className="right-half">
      <FilterForm
        minSeating={minSeating}
        maxSeating={maxSeating}
        updateFilter={updateFilter}
      />
      <ProductIndex products={products} />
    </div>
  </div>
);

export default Search;
