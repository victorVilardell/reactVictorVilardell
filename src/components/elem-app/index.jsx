import React from 'react'  
import ElemList from '../elem-list'
import ElemSearch from '../elem-search'

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
        this.setState({ properties: properties.properties })
      })
  }

   searchBy(input){
      this.setState({ inputValue : input.target.value })
   }

  render() {
    if (this.state.properties.length > 0) {
      return (
        <section>
          <section className="container-search">
            <ElemSearch searchBy={this.searchBy.bind(this)} />
          </section>

          <div className="container-fluid">
            <ElemList listado={this.state.properties} inputValue={this.state.inputValue} />
          </div>
        </section>

      )
    } else {

      return <p className="text-center">Cargando empleados...</p>

    }
  }

}