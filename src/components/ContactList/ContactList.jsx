import { connect } from 'react-redux'
import ContactItem from '../ContactItem'
import contactsActions from '../../redux/contacts/contacts-actions';
import './ContactList.scss'


const ContactList = ({ contacts, onDeleteContact }) => (
	<ul className='Contact-list'>
		{contacts.map(contact => {
			const {id, name, number} = contact
			return (
				<li key={id} className='Contact-item'>
					<ContactItem
						
						id={id}
						name={name}
						number={number}
						onDeleteContact={onDeleteContact}
					/>
				</li>)
		})}
	</ul>
)

const getFilteredSortedContacts = (contacts, filter) => {
	const normalizedFilter = filter.toLowerCase();
	return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter)).sort((a, b) => a.name.localeCompare(b.name))
}

const mapStateToProps = ({contacts: {items, filter}}) => ({
	contacts: getFilteredSortedContacts(items, filter)
})

const mapDispatchToProps = dispatch => ({
	onDeleteContact: (id)=>dispatch(contactsActions.deleteContact(id))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);