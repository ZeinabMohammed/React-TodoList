import React , { Component } from 'react'
import propTypes from 'prop-types';

export class AddTodo extends Component {
	state={
		title:''
	}
	onChange=(e)=>this.setState({[e.target.name]: e.target.value});
	onSubmit=(e)=>{
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({title:''});
	}
	render() {
		return (
			<form onSubmit={this.onSubmit} style={{display: 'flex'}}>
			<input 
			style={{ flex:'10',padding:'5px'}}
			type='text'
			name='title'
			value={this.state.title}
			onChange={this.onChange}
			placeholder='Add Todo ...'/>
			<input 
			type='submit'
			value='submit'
			
			className='btn'
			style={{flex:'1'}}/>
			</form>
		)
	}
}
// propTypes
AddTodo.propTypes={
	addTodo :propTypes.func.isRequired,
	
}
export default AddTodo;