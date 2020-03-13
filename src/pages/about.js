import React, { Component } from 'react'
import Header from './common/header';
import { Helmet } from "react-helmet";
import { Link } from 'components/Router'
export class about extends Component {
  constructor(props) {
    super(props);
    const data = [
      {name: 'What is your earliest memory?', linkItem: '/blog'},
      {name: 'What makes us such good friends?', linkItem: '/blog'},
      {name: 'What is your favorite memory of me?', linkItem: '/blog'},
      {name: 'Do you think we’ll ever lose touch with each other?', linkItem: '/blog'},
      {name: 'Who were your favorite relatives?', linkItem: '/blog'},
      {name: 'What was my mom/dad like growing up?', linkItem: '/blog'},
      {name: 'Was she/he well-behaved?', linkItem: '/blog'},
      {name: 'Do you have any favorite stories about your kids?', linkItem: '/blog'}
    ];
    this.state= {
        results: data,
        fullData: data,
        searchValue: 'hide-search'
    }
}

/**
 * Filter array items based on search criteria (query)
 */
filterItems = (arr, query) => {
  //filter object array
  //return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  const data = arr.filter(song => {
    return song.name.toLowerCase().includes(query.toLowerCase())
  });
  return data;
}

handleInput = evt => {
  const value = evt.target.value || '';
  this.setState({searchValue: value ? 'show-search': 'hide-search'});
 this.setState({ results: value != '' ? this.filterItems(this.state.fullData, value) : this.state.fullData })
}

  render() {
     let { results, searchValue } = this.state;
    return (
      <div>

<input type="search" placeholder="Enter your search.." onChange={this.handleInput} className="form-control input-lg typeahead"/>
            <div className={searchValue + ' searchAutocomplete'}>
            <div className="showAll"><span>Matches Found({results.length})</span> <Link to="/">Show All > </Link></div>
                <ul>
                  
                  {searchValue == 'show-search' && results.map((item,i) => <li key={i}><a href={item.linkItem}>{item.name}</a></li>)}
                  
                </ul>
            </div>  
      {/* <Header />
      <p className="">React Static is a progressive static site generator for Reac.</p>
      <Helmet>
        <title>My seo app</title>
        <meta name="description" content="testing react helmet" />
        <meta name="keywords" content="react,seo,helmet" />
      </Helmet>
      <Link to="/blog">
      <img src="https://tinypng.com/images/photoshop-panda.png" />
      </Link> */}
    </div>
      );
  }
}
 export default about