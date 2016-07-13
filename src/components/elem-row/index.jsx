import React from 'react'  
import ElemPhoto from '../elem-photo'

export default class ElemRow extends React.Component {

  render() {
    return(
      <article className="media">

        <header>
          <h3>{this.props.title}</h3>
          <p>{this.props.price}</p>
        </header>

        <div className="media-body">

          <ElemPhoto image={this.props.image} />

          <div className="media-info">

              <p className="relevant-info"> <span>{this.props.surface}</span> <span>{this.props.rooms}</span></p>
              <p className="description">
                {this.props.description}
              </p>

          </div>

        </div>

        <hr/>

      </article>
    )
  }
}