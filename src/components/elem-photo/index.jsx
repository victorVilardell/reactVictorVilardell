import React from 'react'

export default class ElemPhoto extends React.Component {  
  render() {
      return (
      <figure className="media-left">
        <img className="media-object" src={this.props.image} />
      </figure>
    )
  }
}