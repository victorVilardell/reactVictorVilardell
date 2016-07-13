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

        <div>

            {this.props.surface} {this.props.rooms} &nbsp;
            {this.props.description}

          </div>

        </div>

        <hr/>

      </article>
    )
  }
}