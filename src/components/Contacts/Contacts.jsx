import React, { Component } from "react";

import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Modal from "./Modal/Modal";
import IconButton from "./IconButton/IconButton";
import { ReactComponent as Close } from "../../img/icons/close.svg";
import {
  fetchContscts,
  addContact,
  deleteContact,
  editContact,
} from "../../services/contacts-api";

export class Contacts extends Component {
  state = {
    contacts: [],
    showModal: false,
    isEditContact: "",
  };

  componentDidMount() {
    fetchContscts()
      .then((data) =>
        this.setState({
          contacts: data,
        })
      )
      .catch((error) => console.log(error));

    // const contacts = localStorage.getItem("contacts");
    // const parsedContacts = JSON.parse(contacts);
    // if (parsedContacts) {
    //   this.setState({
    //     contacts: parsedContacts,
    //   });
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    // Перевірка чі є щось в Локал
    if (this.setState.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }

    // Перевірка чі додалась новий контакт
    // if (
    //   this.state.contacts.length > prevState.contacts.length &&
    //   prevState.contacts.length !== 0
    // ) {
    //   this.toggleModal();
    // }
  }

  addContact = ({ category, pib, phones, info }) => {
    const contact = {
      id: localStorage.getItem("id"),
      token: localStorage.getItem("token"),
      phones,
      pib,
      info,
      category,
    };

    addContact(contact)
      .then((data) => {
        this.setState(() => ({
          contacts: data,
        }));

        this.toggleModal();
      })
      .catch((error) => console.log(error));

    // this.toggleModal();
  };

  toggleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  deleteContact = (contactId) => {
    let deleteСontact = {
      id: localStorage.getItem("id"),
      token: localStorage.getItem("token"),
      contactID: contactId,
    };

    deleteContact(deleteСontact)
      .then((data) => alert(data.text))
      .catch((error) => console.log(error));

    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  editContact = ({ category, pib, phones, info, id }) => {
    const editedContact = {
      id: localStorage.getItem("id"),
      token: localStorage.getItem("token"),
      phones,
      pib,
      info,
      category,
      contactID: id,
    };

    editContact(editedContact)
      .then((data) => {
        this.setState({ isEditContact: "" });
        alert(data.text);
      })
      .catch((error) => console.log(error));

    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts.map((item) =>
          item.id === id ? { category, pib, phones, info, id } : item
        ),
      ],
    }));
  };

  toggleEditContact = (id) => {
    this.setState({ isEditContact: id });
  };

  render() {
    const { contacts, showModal, isEditContact } = this.state;

    return (
      <>
        <h2>Contacts</h2>
        <button type="button" onClick={this.toggleModal}>
          Додати новий контакт
        </button>
        <ContactList
          isEditContact={isEditContact}
          contacts={contacts}
          onDeleteContact={this.deleteContact}
          toggleEditContact={this.toggleEditContact}
          editContact={this.editContact}
          toggleModal={this.toggleModal}
        />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ContactForm onSubmit={this.addContact} />
            <IconButton
              showModal={showModal}
              onClick={this.toggleModal}
              aria-label="Закрити"
            >
              <Close width="40" height="40" />
            </IconButton>
          </Modal>
        )}
      </>
    );
  }
}

export default Contacts;
