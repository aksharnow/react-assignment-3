import React from 'react'
import Product from '../../src/Product'

class ProductContainer extends React.Component {
  render(){
    return(
      <div className="products">
            {
              this.props.products.map(function(eachProduct){
                  return <Product productName={eachProduct.productName} productPrice={eachProduct.productPrice} productImage={eachProduct.productImage}/>
              })
            }
      </div>
    )
  }

  componentWillReceiveProps(nextProps){
    //  console.log("This are old Props", this.props)
      console.log("This are new Props",nextProps)
  }


}

export default ProductContainer
