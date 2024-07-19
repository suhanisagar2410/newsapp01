import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let {title,description,imgurl,newsurl,author,date} = this.props;
    return (
      <div className='h-50 my-3'>
                <div className="card"
                // style={{ width: '18rem' }}
                 >
          <img src={!imgurl?"https://www.cartoq.com/wp-content/uploads/2023/09/tata-sumo-narain-karthikeyan-vintage-ad.jpg":imgurl} className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>  
            <p className="card-text">{description}...</p>
            <p className="card-text "><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
