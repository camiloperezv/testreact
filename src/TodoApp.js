import React, { Component } from 'react';
import TodoList from './TodoList'
export default class  TodoApp extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			items:[],
			text:''
		};
	}	
	handleChange(e){
		this.setState({text:e.target.value})
	}
	handleSubmit(e){
		e.preventDefault()
		let newItem = {
			text : this.state.text,
			id: new Date().getTime()
		};
		this.setState((lastState)=>({
			items: lastState.items.concat(newItem),
			text:''
		}));
	}
	render(){
		return(
			<div>
				<h3>TODO</h3>
				<TodoList items={this.state.items}/>
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange} value={this.state.text}/>
					<button type="submit">Enviar</button>
				</form>
			</div>
		);
	}
}