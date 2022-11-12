import React, { Component } from "react";

// import style from "../Contacts.module.css";
import style from "./ContactListItem.module.css";
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
  indx,
}) => {
  const handleEditContact = (e) => {
    toggleEditContact(id);
  };

  // const counter = (indx += 1);

  let sizeCellGrid = 7;
  if (info.email) {
    sizeCellGrid += 1;
  }
  if (info.work) {
    sizeCellGrid += 1;
  }
  if (info.site) {
    sizeCellGrid += 1;
  }
  if (info.info) {
    sizeCellGrid += 2;
  }
  if (phones.length > 2) {
    sizeCellGrid += phones.length - 1;
  }

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
      <div
        style={
          {
            // gridRowEnd: `span ${sizeCellGrid}`,
          }
        }
        className={style.contact_list}
        key={"kard" + id}
      >
        <div className={`${style.contact_list_item} `}>{pib}</div>

        {phones.map(({ title, number }) => (
          <div
            className={`${style.contact_list_item_phones} `}
            key={"phone" + number + id}
          >
            <div>{title}</div>
            <a href={`tel:${number}`} type="tel">
              {number}
            </a>
          </div>
        ))}

        {category.map(({ text }) => (
          <div className={`${style.contact_list_item} `} key={text}>
            {text}
          </div>
        ))}

        {info.email && (
          <div className={`${style.contact_list_item} `} key={"email" + id}>
            <a href={`mailto:${info.email}`} type="email">
              {info.email}
            </a>
          </div>
        )}

        {info.work && (
          <div className={`${style.contact_list_item} `} key={"work" + id}>
            {info.work}
          </div>
        )}

        <div className={`${style.contact_list_item} `} key={"info" + id}>
          {info.whoisit}
        </div>

        {info.site && (
          <div className={`${style.contact_list_item} `} key={"site" + id}>
            {info.site}
          </div>
        )}

        {info.info && (
          <div className={`${style.contact_list_item}`} key={"info1" + id}>
            {info.info}
          </div>
        )}

        <div className={style.contact_list_item_btn}>
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

          {/* <div>{counter}</div> */}
        </div>
      </div>
    </>
  );
};

// export class ContactListItem extends Component {
//   state = { elementHeight: 0 };

//   componentDidMount() {
//     this.resizeHandler();
//     window.addEventListener("resize", this.resizeHandler);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.resizeHandler);
//   }

//   handleEditContact = (e) => {
//     this.props.toggleEditContact(this.props.id);
//   };

//   divRef = React.createRef();

//   resizeHandler = () => {
//     if (this.props.info.info) {
//       this.setState({ elementHeight: this.divRef.current.clientHeight });
//     }
//   };

//   render() {
//     const {
//       id,
//       category,
//       phones,
//       pib,
//       info,
//       isEditContact,
//       editContact,
//       toggleEditContact,
//       indx,
//       onDeleteContact,
//     } = this.props;

//     let counter = indx + 1;

//     // console.log(this.state.elementHeight);

//     let sizeCellGrid = 7;
//     if (info.email) {
//       sizeCellGrid += 1;
//     }
//     if (info.work) {
//       sizeCellGrid += 1;
//     }
//     if (info.site) {
//       sizeCellGrid += 1;
//     }
//     if (info.info) {
//       sizeCellGrid += 1;
//     }
//     if (phones.length > 1) {
//       sizeCellGrid += phones.length - 1;
//     }

//     return (
//       <>
//         {/* <div className="tile" ref={this.divRef}>
//           Div height: {this.state.elementHeight + " px"}
//         </div> */}

//         {isEditContact === id && (
//           <Modal onClose={toggleEditContact}>
//             <ContactForm
//               editContact={editContact}
//               onSubmit={this.handleEditContact}
//               contact={{ id, category, phones, pib, info }}
//             />
//             <IconButton
//               showModal={isEditContact}
//               onClick={toggleEditContact}
//               aria-label="Закрити"
//             >
//               <Close width="40" height="40" />
//             </IconButton>
//           </Modal>
//         )}
//         <div
//           style={
//             {
//               // gridRowEnd: `span ${sizeCellGrid}`,
//             }
//           }
//           className={style.contact_list}
//           key={"kard" + id}
//         >
//           <div className={`${style.contact_list_item}`}>{pib}</div>

//           {phones.map(({ title, number }) => (
//             <div
//               className={`${style.contact_list_item_phones} `}
//               key={"phone" + number + id}
//             >
//               <div>{title}</div>
//               <a href={`tel:${number}`} type="tel">
//                 {number}
//               </a>
//             </div>
//           ))}

//           {category.map(({ text }) => (
//             <div className={`${style.contact_list_item} `} key={text}>
//               {text}
//             </div>
//           ))}

//           {info.email && (
//             <div className={`${style.contact_list_item} `} key={"email" + id}>
//               <a href={`mailto:${info.email}`} type="email">
//                 {info.email}
//               </a>
//             </div>
//           )}

//           {info.work && (
//             <div className={`${style.contact_list_item} `} key={"work" + id}>
//               {info.work}
//             </div>
//           )}

//           <div className={`${style.contact_list_item} `} key={"info" + id}>
//             {info.whoisit}
//           </div>

//           {info.site && (
//             <div className={`${style.contact_list_item} `} key={"site" + id}>
//               {info.site}
//             </div>
//           )}

//           {info.info && (
//             <div
//               className={`${style.contact_list_item} ${style.description}`}
//               key={"info1" + id}
//               ref={this.divRef}
//             >
//               {this.state.elementHeight + " px"}
//               {info.info}
//             </div>
//           )}

//           <div className={style.contact_list_item_btn}>
//             <IconButton
//               onClick={() => onDeleteContact(id)}
//               aria-label="Видалити"
//             >
//               <DeleteContact width="20" height="20" />
//             </IconButton>
//             <IconButton
//               id={id}
//               onClick={this.handleEditContact}
//               aria-label="Редагувати"
//             >
//               <ChangeContact width="20" height="20" />
//             </IconButton>

//             {/* <div>{counter}</div> */}
//           </div>
//         </div>
//       </>
//     );
//   }
// }

export default ContactListItem;
