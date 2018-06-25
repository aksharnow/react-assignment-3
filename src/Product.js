import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Product extends Component {
  render(){
    return(
      <div className="product">
            <div className="product-image">
                <img src={this.props.productImage}/>
            </div>
            <h4 className="product-name">{this.props.productName}</h4>
            <h4 className="product-price">$ {this.props.productPrice}</h4>
            <div className="product-action">
                <button className="added" type="button"> Added </button>
            </div>
      </div>
    )
  }
}

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number,
  productImage:PropTypes.string
}

Product.defaultProps = {
  productPrice: 0,
  productImage:"http://4.bp.blogspot.com/_CHG2GRbeET8/SS3f-tcSNiI/AAAAAAAAJEk/qVdRYu1MLMs/s320/missing-715826.gif"
}

export default Product
