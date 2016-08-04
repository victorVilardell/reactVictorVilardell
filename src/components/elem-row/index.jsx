import React from 'react'  
import ElemPhoto from '../elem-photo'

export default class ElemRow extends React.Component {

  elipseMore() {

    let numShow = 100
    let ellipsetext = '...'
    let textShow = 'show more'
    let textnoShow = 'show less'

    console.log("hola")


  }

  componentDidMount(){

    this.elepseMore

  }

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

              <p className="relevant-info">
                <span className="meters">{this.props.surface} m<sup>2</sup></span>
                {this.props.rooms || 0} hab.
              </p>
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