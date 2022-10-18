import React from "react";
import style from "./IconButton.module.css";

const IconButton = ({ children, onClick, showModal, ...allyProps }) => {
  function maceOptionClassName(value) {
    const optionClasses = [];
    if (value) {
      optionClasses.push(style.btn_close);
    } else {
      optionClasses.push(style.iconButton);
    }
    return optionClasses;
  }

  return (
    <button
      type="button"
      className={maceOptionClassName(showModal)}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
  showModal: null,
};

export default IconButton;
