    import React from 'react'
    export default class ElemSearch extends React.Component{
       render(){
         return <article className="Search">
           <input type="text" placeholder="Texto" onChange={this.props.searchBy}/>
           <img src="images/search.png"/>
         </article>
       }
    }