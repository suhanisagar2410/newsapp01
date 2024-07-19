import React, { Component } from 'react';
import Newsitem from './Newsitem';
// import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize: 8,
    category:'general',
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  capitalFirstlater=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1
      
    };
    document.title=`${this.capitalFirstlater(this.props.category)} - Newsy`
  }
  async updateNews(){
        const url =
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6b734f0d2da745589f10812f0ed6a42e&apiKey=6a42e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});	
      let data = await fetch(url);
      let parsedata = await data.json(); 
      console.log(parsedata)	
      this.setState({ articles: parsedata.articles,totalResults: parsedata.totalResults,loading:false  });
  }
  async componentDidMount() {
   
      // let url =
      //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6b734f0d2da745589f10812f0ed6a42e&apiKey=6a42e&page=1&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true});	
      // let data = await fetch(url);
      // let parsedata = await data.json();
      // console.log(parsedata)	
      // this.setState({ articles: parsedata.articles,totalResults: parsedata.totalResults,loading:false  });
      this.updateNews()
  }

  handlePreviousClick = async () => {
    console.log('prev');
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6b734f0d2da745589f10812f0ed6a42e&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // console.log('data');
    // let parsedata = await data.json();
    // console.log(parsedata);

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedata.articles,
    //   loading:false
    // });
    this.setState({page:this.state.page-1})
    this.updateNews()
  };

  handleNextClick = async () => {
    console.log('Next');
  //   if((this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

  //   }
  //   else{
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6b734f0d2da745589f10812f0ed6a42e&page=${
  //     this.state.page + 1
  //   }&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   console.log('data');
  //   let parsedata = await data.json();
  //   console.log(parsedata);

  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: parsedata.articles,
  //     loading:false
  //   });
  // };
  this.setState({page:this.state.page+1})
  this.updateNews()
}

  render() {
    const { articles } = this.state;

    return (
      <div className='container my-4'>
        <h2 className="text-center">Newsy- Top {this.capitalFirstlater(this.props.category)} Headlines  </h2>
        {/* <Spinner/> */}
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={true}      
          loader={<h4>Loading...</h4>} */}
        
          
        <div className='row'>
          { (
            articles.map((element) => {
              return (
                <div className='col-md-3' key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 30) : ''}
                    description={element.description ? element.description.slice(0, 50) : ''}
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })
          ) }
        </div>
            {/* </InfiniteScroll> */}
        {/* Container for buttons */}
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePreviousClick}>
            &larr; Previous
          </button>
          <button type='button' disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} className='btn btn-dark' onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
