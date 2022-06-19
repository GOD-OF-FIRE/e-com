import React, { Component } from "react";
import Header from './components/Header.js';
import ProductSection from './components/ProductSection.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json();
    this.setState({
      productList: json,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <ProductSection products={this.state.productList} />
      </div>
    );
  }
}

export default App;
