import axios from "axios";
import { serverAddres } from "../components/Functions/serverAddres";

let fetchObj = {
    id: localStorage.getItem("id"),
    token: localStorage.getItem("token"),
};

export const AmountCases = () => {
    return axios({
      url: serverAddres("statistics/amount-cases.php"),
      method: "POST",
      header: { "Content-Type": "application/json;charset=utf-8" },
      data: JSON.stringify(fetchObj),
    }).then((response) => {
        console.log(response.data.amountCases)
        return response.data.amountCases
    });
  };