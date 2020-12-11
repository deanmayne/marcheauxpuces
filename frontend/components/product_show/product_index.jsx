import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import ProductIndexItem from './product_index_item'


class ProductIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){this.props.fetchProducts()};

    render(){
return(
    <div className="product-index">
   { this.props.products.map(product => {
            return (
            <ProductIndexItem 
                key={product.id} 
                product={product} /> 
            )
        }
 
        )}
    </div>
)
   
    }
}


export default ProductIndex;

