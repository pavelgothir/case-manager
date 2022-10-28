import React from "react";
// import style from "../Contacts.module.css";

// import IconButton from "../IconButton/IconButton";
// import { ReactComponent as DeleteContact } from "../../../img/icons/delete.svg";
// import { ReactComponent as ChangeContact } from "../../../img/icons/change.svg";
// import { ReactComponent as Close } from "../../../img/icons/close.svg";
// import ContactForm from "../ContactForm/ContactForm";
// import Modal from "../Modal/Modal";
import ContactListItem from "../ContactListItem/ContactListItem";
import s from "../Contacts.module.css"

const ContactList = ({
  contacts,
  onDeleteContact,
  isEditContact,
  editContact,
  toggleEditContact,
}) => {
  return (
    <div className={s.wr__contact__list}>
      {contacts.map((contact) => (
        <ContactListItem
          onDeleteContact={onDeleteContact}
          {...contact}
          key={"kard" + contact.id}
          isEditContact={isEditContact}
          toggleEditContact={toggleEditContact}
          editContact={editContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
