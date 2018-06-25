import React, { Component } from 'react'
import ProductContainer from './containers/ProductContainer'
import SearchBar from './SearchBar'

// const staticProducts = [
//   {
//     productName: 'Oranges',
//     productPrice: 15,
//     productImage: "https://s2uqdnlqz93lrjbq205ld0eu-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/LilSnappers_Cara.png"
//   },
//   {
//     productName: 'Bananas',
//     productPrice: 10,
//     productImage: "https://cdn1.medicalnewstoday.com/content/images/headlines/271/271157/bananas.jpg"
//   },
//   {
//     productName: 'Berries',
//     productPrice: 20
//   },
//   {
//     productName: 'Apples',
//     productPrice: 20
//   },
// ]

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        dynamicProducts: []
    }
  }

  render(){
    return(
      <div className='App'>
          <SearchBar />
          <ProductContainer products = {this.state.dynamicProducts}/>
      </div>
    );
  }

  componentDidMount (){
    fetch('https://api.myjson.com/bins/19ht6u')
    .then(function(response){
        console.log("This is the Data from the API", response)
        return response.json()
    })
    .then(function(jsonResponse){
        console.log("This is the JSON response", jsonResponse)
    })
    .catch(function(error){
        console.log(error)
    })

  }
}

export default App
