import React, { Component } from "react";
import style from "../Contacts.module.css";
import { fetchCategories } from "../../../services/contacts-api";
import IconButton from "../IconButton/IconButton";
import { ReactComponent as Add } from "../../../img/icons/add.svg";
import { ReactComponent as Minus } from "../../../img/icons/minus.svg";

export class ContactForm extends Component {
  state = {
    categori: [],
    category: [{ text: "" }],
    pib: "",
    phones: [{ title: "", number: "" }],
    info: { email: "", work: "", whoisit: "", site: "", info: "" },

    ...this.props.contact,
  };

  componentDidMount() {
    fetchCategories()
      .then((data) => this.setState({ categori: data }))
      .catch((error) => console.log(error));
  }

  handleChangePib = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleChangeInfo = (event) => {
    const { name, value } = event.currentTarget;

    this.setState((prevState) => ({
      ...prevState,
      info: { ...prevState.info, [name]: value },
    }));
  };

  handleChangeSelect = (event) => {
    const { value } = event.currentTarget;

    this.setState((prevState) => ({
      ...prevState,
      category: [{ text: value }],
    }));
  };

  handleChangeText = (event) => {
    const { value } = event.currentTarget;

    this.setState((prevState) => ({
      ...prevState,
      info: { ...prevState.info, info: value },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.id) {
      const { category, pib, info, phones, id } = this.state;
      const sendData = { category, pib, phones, info, id };

      this.props.editContact(sendData);
      // this.props.onSubmit("");
      this.reset();
    } else {
      const { category, pib, info, phones } = this.state;
      const sendData = { category, pib, phones, info };

      this.props.onSubmit(sendData);
      this.reset();
    }
  };

  reset = () => {
    this.setState({
      category: [],
      pib: "",
      info: { email: "", work: "", whoisit: "", site: "", info: "" },
      inputPhone: { title: "", number: "" },
      inputPhone2: { title: "", number: "" },
    });
  };

  handleChangeTel = ({
    target: {
      value,
      name,
      dataset: { index },
    },
  }) => {
    this.setState(({ phones }) => ({
      phones: phones.map((n, i) =>
        +index === i ? { ...n, [name]: value } : n
      ),
    }));
  };

  addPhone = () => {
    this.setState(({ phones }) => ({
      phones: [
        ...phones,
        {
          // id: 1 + Math.max(...phones.map((n) => n.id)),
          title: "",
          number: "",
        },
      ],
    }));
  };

  delPhone = ({
    target: {
      dataset: { index },
    },
  }) => {
    this.setState(({ phones }) => ({
      phones: phones.filter((n, i) => i !== +index),
    }));
  };

  render() {
    const {
      category,
      categori,
      pib,
      info: { email, work, whoisit, site, info },
      phones,
    } = this.state;

    return (
      <form className={style.form_contact} onSubmit={this.handleSubmit}>
        <label>
          <div>Прізвище Ім'я По батькові</div>
          <input
            className={style.input_contact}
            type="text"
            value={pib}
            onChange={this.handleChangePib}
            name="pib"
            required
          />
        </label>

        <label>
          <div>Категорія</div>
          <select
            className={style.select_contact}
            value={category.map(({ text }) => text).toString()}
            onChange={this.handleChangeSelect}
          >
            <option value="Виберіть одне із значень">
              Виберіть одне із значень
            </option>
            {categori.map(({ text }, index) => (
              <>
                <option key={index} value={text}>
                  {text}
                </option>
              </>
            ))}
          </select>
        </label>

        <label>
          {phones.map((phone, i) => (
            <>
              <div>Телефон</div>
              <div key={phone.i}>
                <input
                  className={style.input_contact}
                  name="title"
                  data-index={i}
                  value={phone.title}
                  onChange={this.handleChangeTel}
                  required
                />
                <input
                  className={style.input_contact}
                  name="number"
                  data-index={i}
                  value={phone.number}
                  onChange={this.handleChangeTel}
                  required
                />
                {i ? (
                  // <button data-index={i} onClick={this.delPhone}>
                  //   x
                  // </button>
                  <IconButton data-index={i} onClick={this.delPhone}>
                    <Minus width="10" height="10" />
                  </IconButton>
                ) : null}
              </div>
            </>
          ))}
        </label>

        <div>
          <IconButton onClick={this.addPhone}>
            <Add width="10" height="10" />
          </IconButton>
        </div>

        <label>
          <div>Пошта</div>
          <input
            className={style.input_contact}
            type="text"
            name="email"
            value={email}
            onChange={this.handleChangeInfo}
          />
        </label>

        <label>
          <div>Місце роботи</div>
          <input
            className={style.input_contact}
            type="text"
            name="work"
            value={work}
            onChange={this.handleChangeInfo}
          />
        </label>

        <label>
          <div>Хто це?</div>
          <input
            className={style.input_contact}
            type="text"
            name="whoisit"
            value={whoisit}
            onChange={this.handleChangeInfo}
          />
        </label>

        <label>
          <div>Сайт</div>
          <input
            className={style.input_contact}
            type="text"
            name="site"
            value={site}
            onChange={this.handleChangeInfo}
          />
        </label>

        <label>
          <div>Додаткова інформація</div>
          <textarea
            className={style.textarea_contact}
            value={info}
            onChange={this.handleChangeText}
          ></textarea>
        </label>

        <button type="submit">
          {this.state.id ? "Редагувати" : "Зберегти"}
        </button>
      </form>
    );
  }
}

export default ContactForm;
