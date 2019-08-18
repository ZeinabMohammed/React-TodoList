import React, { Component } from 'react';
import propTypes from 'prop-types';
export class TodoItem extends Component {
	// getStyle = ()=>{
	// 	if (this.props.todo.completed){
	// 		return{
	// 			textDecoration:'Line-through'

	// 		}
	// 	}
	// 	else{
	// 		return{
	// 			textDecoration:'none'
	// 		}
	// 	}
		
	// }
	getStyle=()=>{
		return{
			background :'lightgray',
			padding:'10px',
			borderBottom:'1px #acc dotted',

			textDecoration:this.props.todo.completed ?
			'Line-through': 'none'
		}
	}

	render() {
		const { id,title } = this.props.todo;
		return (
			<div style={this.getStyle()}>{' '}
				<p>
				<input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>
				{title}
				<button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
				</p>	
			</div>
		)
	}
}
// propTypes
TodoItem.propTypes={
	todo :propTypes.object.isRequired
}
const btnStyle={
	background:'#ff0000',
	color:'white',
	border:'none',
	borderRadius:'50%',
	padding:'5px 9px',
	cursor:'pointer',
	float:'right'

}
export default TodoItem