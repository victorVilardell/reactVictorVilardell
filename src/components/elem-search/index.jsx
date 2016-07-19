    import React from 'react'

    export default class ElemSearch extends React.Component{
       render(){
         return <article className="Search">
     		<p className="iconSearch">
           		<input type="text" placeholder="Texto" onChange={this.props.searchBy}/>
       		</p>
         </article>
       }
    }