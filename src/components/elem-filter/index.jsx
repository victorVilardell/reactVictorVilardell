import React from 'react'

export default class ElemFilter extends React.Component {

	constructor(props) {
		super(props)
		this.state = { optionsfilter: [] }
	}

	 componentWillMount() {

		return this.setState({ 
			optionsfilter: [
					{value:'default', text:'default'},
					{value:'price', text:'Precio ascendente'},
					{value:'price', text:'Precio descendente'},
					{value:'rooms', text:'Nº Rooms'},
				]
		})

	}

	render() {
		return (
			<p>
				<select value={this.props.arrayOfOptionValues} onChange={this.props.filterBy}>
					{
						this.state.optionsfilter.map((optionsFil) => {
							return <option value={optionsFil.value}>
										{optionsFil.text}
									</option>
						})
					}
				</select>
			</p>
		)
	}

}