import React from "react";
import style from "../Contacts.module.css";
import IconButton from "../IconButton/IconButton";
import { ReactComponent as DeleteContact } from "../../../img/icons/delete.svg";
import { ReactComponent as ChangeContact } from "../../../img/icons/change.svg";
import { ReactComponent as Close } from "../../../img/icons/close.svg";
import ContactForm from "../ContactForm/ContactForm";
import Modal from "../Modal/Modal";

const ContactListItem = ({
  id,
  category,
  phones,
  pib,
  info,
  onDeleteContact,
  isEditContact,
  toggleEditContact,
  editContact,
}) => {
  const handleEditContact = (e) => {
    toggleEditContact(id);
  };
console.log(category)
  return (
    <>
      {isEditContact === id && (
        <Modal onClose={toggleEditContact}>
          <ContactForm
            editContact={editContact}
            onSubmit={handleEditContact}
            contact={{ id, category, phones, pib, info }}
          />
          <IconButton
            showModal={isEditContact}
            onClick={toggleEditContact}
            aria-label="Закрити"
          >
            <Close width="40" height="40" />
          </IconButton>
        </Modal>
      )}
      <div className={style.contact_list} key={"kard" + id}>
        <div className={`${style.contact_list_item} ${style.name}`}>{pib}</div>
        {phones.map(({ title, number }) => (
          <div
            className={`${style.contact_list_item_phones} ${style.phone}`}
            key={"phone" + number + id}
          >
            <div>{title}</div>
            <a href={`tel:${number}`} type="tel">
              {number}
            </a>
          </div>
        ))}
        {category.map(({ text }) => (
          <div
            className={`${style.contact_list_item} ${style.categoty}`}
            key={text}
          >
            {text}
          </div>
        ))}
        <div
          className={`${style.contact_list_item} ${style.info}`}
          key={"info" + id}
        >
          {info.email && (
            <a href={`mailto:${info.email}`} type="email">
              {info.email}
            </a>
          )}
          {info.work && <div>{info.work}</div>}
          <div>{info.whoisit}</div>
          {info.site && <div>{info.site}</div>}
          {info.info && <div>{info.info}</div>}
        </div>

        <div className={style.contact_list_item_info}>
          <IconButton onClick={() => onDeleteContact(id)} aria-label="Видалити">
            <DeleteContact width="20" height="20" />
          </IconButton>
          <IconButton
            id={id}
            onClick={handleEditContact}
            aria-label="Редагувати"
          >
            <ChangeContact width="20" height="20" />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default ContactListItem;
