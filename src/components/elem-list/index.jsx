import React from 'react'  
import ElemRow from '../elem-row'

export default class ElemList extends React.Component {

  render() {
    return (
      <section className="media-list">
        {
          this.props.listado.map((properties) => {

            if(properties.title.search(this.props.inputValue) > -1) {
              return <ElemRow key={ properties.id }
                              image={ properties.image }
                              title={ properties.title }
                              rooms= { properties.rooms }
                              surface= { properties.surface }
                              price=  { properties.price }
                              description= { properties.description }  />
            }

          })
        }
      </section>
    )
  }
}