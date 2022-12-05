import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Loadpic from "../../Loading/Interactive/Loadpic";
import { serverAddres } from "../../Functions/serverAddres";
import { ReactComponent as Phone } from "../../../img/icons/iphone.svg";
import { ReactComponent as Email } from "../../../img/icons/email.svg";
import { ReactComponent as User } from "../../../img/icons/user.svg";

const ProfilePhoto = ({ url, userName, email }) => {
  const [loading, setLoading] = useState("");

  const [recoveryPass, setRecoveryPass] = useState("");
  const [recoveryPassto, setRecoveryPassto] = useState("");
  const [recoveryError, setRecoveryError] = useState("");

  let passObj = {
    id: localStorage.getItem("id"),
    token: localStorage.getItem("token"),
    pass: recoveryPass,
  };

  const changePic = (data) => {
    const formCaseEdit = document.getElementById(data);
    const formData = new FormData();
    let imagefile = document.getElementById("uploadbtn");
    // return console.log(imagefile.files[0])
    formData.append("image", imagefile.files[0]);
    formData.append("id", window.location.search.slice(1));
    formData.append("key", "user");
    axios({
      url: serverAddres("upload-case-img.php"),
      method: "POST",
      header: { "Content-Type": "multipart/form-data" },
      data: formData,
      onUploadProgress: (event) => {
        setLoading("active");
        console.log(Math.round((event.loaded * 100) / event.total));
      },
    })
      .then((data) => {
        localStorage.setItem("profilePhoto", data.data);
        // return console.log(data.data)
        window.location.reload();
        setLoading("");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="case__contact__info__img">
      <div className="case__contact__info__img__inner">
        <img src={`${url}`} alt="" />
        <Loadpic show={loading} />
        <form id="caseImgEdit">
          <label htmlFor="uploadbtn" className="case__edit__img">
            Edit
          </label>
          <input
            onChangeCapture={() => {
              changePic("caseImgEdit");
            }}
            multiple
            id="uploadbtn"
            type="file"
            name="uploadbtn"
          />
        </form>
      </div>
      <div className="user_info">
        <h4 className="user_info_name">
          <User
            width="25"
            height="25"
            style={{
              marginRight: 10,
            }}
          />
          {userName}
        </h4>
        <h4 className="user_info_phone">
          <Phone
            width="20"
            height="20"
            style={{
              marginRight: 15,
            }}
          />
          telephone
        </h4>
        <h4 className="user_info_mail">
          <Email
            width="20"
            height="20"
            style={{
              marginRight: 15,
            }}
          />
          {email}
        </h4>
      </div>
      <div className="change_password">
        <h4>Змінити пароль</h4>
        <div className="wrap__rec__form">
          <label htmlFor="rec__pass">Введіть пароль</label>
          <input
            type="password"
            name="rec__pass"
            id="rec__pass"
            value={recoveryPass}
            onChange={(e) => {
              setRecoveryPass(e.target.value);
            }}
          />
          <label htmlFor="rec__passto">Повторіть пароль</label>
          <input
            type="password"
            name="rec__passto"
            id="rec__passto"
            value={recoveryPassto}
            onChange={(e) => {
              setRecoveryPassto(e.target.value);
            }}
          />
          <div className="error__recovery">
            <p>{recoveryError}</p>
          </div>
          <div>
            <button
              className="primary__btn"
              onClick={() => {
                if (recoveryPass !== recoveryPassto) {
                  setRecoveryError("Паролі не збігаються");
                  return;
                } else if (recoveryPass.length < 6) {
                  setRecoveryError(
                    "Довжина паролю повинна бути більше 6 символів"
                  );
                  return;
                }
                axios({
                  url: serverAddres("user/change-pass.php"),
                  method: "POST",
                  header: { "Content-Type": "application/json;charset=utf-8" },
                  data: JSON.stringify(passObj),
                })
                  .then((data) => {
                    console.log(data);
                    if (data.data.good) {
                      console.log("ok");
                    } else {
                      console.log("not ok");
                    }
                  })
                  .catch((error) => console.log(error));
              }}
            >
              Надіслати запит
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePhoto;
