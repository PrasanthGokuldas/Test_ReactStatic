import React, { Component } from 'react'
import Header from './common/header';
import { Helmet } from "react-helmet";
import { Link } from 'components/Router'
export class about extends Component {
  render() {
    return (
      <div>
      <Header />
      <p className="">React Static is a progressive static site generator for Reac.</p>
      <Helmet>
        <title>My seo app</title>
        <meta name="description" content="testing react helmet" />
        <meta name="keywords" content="react,seo,helmet" />
      </Helmet>
      <Link to="/blog">
      <img src="https://tinypng.com/images/photoshop-panda.png" />
      </Link>
    </div>
      );
  }
}
 export default about