import React from 'react'  
import ElemList from '../elem-list'

export default class ElemApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { properties: [] }
  }

  componentWillMount() {
    fetch('http://private-d5eaa-test9068.apiary-mock.com/properties')
      .then((response) => {
        return response.json()
      })
      .then((properties) => {
        this.setState({ properties: properties })
      })
  }

  render() {
    if (this.state.properties.length > 0) {
      return (
        <div className="container-fluid">
          <ElemList listado={this.state.properties} />
        </div>
      )
    } else {
      return <p className="text-center">Cargando empleados...</p>
    }
  }

}