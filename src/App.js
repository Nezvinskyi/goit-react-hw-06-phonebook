import React, { Component } from 'react';
// import shortid from 'shortid';
import Layout from './components/Layout';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {};

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </Layout>
    );
  }
}

export default App;
