/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import { FormControl, InputLabel, OutlinedInput, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import './ContactForm.scss'


class ContactForm extends Component {
	state = {
		name: '',
		number: '',
	};

	handleChange = event => {
		const { name, value } = event.currentTarget;
		this.setState({ [name]: value });
	};
	
	handleSubmit = event => {
		const { name, number} = this.state
		event.preventDefault();
		this.props.onSubmit(name, number);
		this.reset();
	};
	
	reset = () => {
		this.setState({ name: '', number: '' });
	};

	render() {

		return (
			<form onSubmit={this.handleSubmit} className='Form'>
				<FormControl variant="outlined" className='Form-input'>
        	<InputLabel color='secondary' htmlFor="component-outlined-name">Name</InputLabel>
					<OutlinedInput
						
						type="text"
						id="component-outlined-name"
						name='name'
						color='secondary'
						value={this.state.name}
						onChange={this.handleChange}
						inputProps={{pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$", title: "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."}}
						required
						label="Name"
					/>
				</FormControl>
	
				<br/>
				<br/>

				<FormControl variant="outlined" className='Form-input'>
					<InputLabel color='secondary' htmlFor="component-outlined-number">Number</InputLabel>
					<OutlinedInput
						type="tel"
						id="component-outlined-number"
						name='number'
						color='secondary'
						value={this.state.number}
						onChange={this.handleChange}
						inputProps={{pattern: "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$", title: "Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"}}
						required
						label="Number" />
				</FormControl>
				<br/>
				<br/>
				<Button type="submit" variant="outlined" color="secondary">
					Add contact
				</Button>
			</form>
		 );
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: (name, number) => dispatch(actions.addContact(name, number))
	}
};
 
export default connect(null, mapDispatchToProps)(ContactForm);

