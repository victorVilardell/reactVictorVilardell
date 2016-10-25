import React from 'react'
import _ from 'lodash'
import ElemList from '../elem-list'
import ElemSearch from '../elem-search'
import ElemFilter from '../elem-filter'


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

  searchBy(input) {
    this.setState({ inputValue : input.target.value })
  }

  filterBy(select) {
    this.setState({
      properties: select.currentTarget.value == 'priceDown' ? this.state.properties.sort(function(a, b){return b.price-a.price}) : _.sortBy(this.state.properties, select.currentTarget.value)
    })
  }

  render() {
    if (this.state.properties.length > 0) {
      return (
        <section>
          <section className="container-search">
            <ElemSearch searchBy={this.searchBy.bind(this)} />
            <ElemFilter filterBy={this.filterBy.bind(this)} />
          </section>

          <div className="container-fluid">
            <ElemList listado={this.state.properties} inputValue={this.state.inputValue} />
          </div>
        </section>

      )
    } else {

      return <p className="loader">
      <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
      <span class="sr-only">Loading...</span>
      </p>

    }
  }

}