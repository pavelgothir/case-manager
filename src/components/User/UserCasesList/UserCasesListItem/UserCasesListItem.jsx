import React from "react";

const UserCasesListItem = ({ id, surname, firstName }) => {
  return (
    <>
      <h5>№ {id}</h5>
      <p>
        {surname} {firstName}
      </p>
      <p>Ще щось{}</p>
    </>
  );
};

export default UserCasesListItem;
