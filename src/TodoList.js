import React, { Component } from 'react';

export default class  TodoList extends Component {
	constructor(props) {
		super(props);
	}	
	render(){
		return(
			<div>
				<ul>
				{
					this.props.items.map(item=>(
						<li key={item.id}>{item.text}</li>
					))
				}
				</ul>
			</div>
		);
	}
}