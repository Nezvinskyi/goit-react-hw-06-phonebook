import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import './Filter.scss'

const Filter = ({ filter, onChange }) => (
	<FormControl variant="outlined" className='Filter-input'>
		<InputLabel color='secondary' htmlFor="component-outlined-filter">Find contacts by name</InputLabel>
		<OutlinedInput
			type="text"
			id="component-outlined-filter"
			color='secondary'
			value={filter}
			onChange={onChange}
			label="Find contacts by name" />
	</FormControl>
)

const mapStateToProps = state => ({
	filter: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
	onChange: (event)=>dispatch(actions.changeFilter(event.target.value))
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter);

