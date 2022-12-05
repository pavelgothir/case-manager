import React, { Component } from "react";
import ProfilePhoto from "./UserInfo/ProfilePhoto";
import "./user.css";

import { fetchUser, fetchReport, fetchHistory } from "../../services/user-api";

import UserReportHistory from "./UserReport/UserReportHistory";
import UserCasesList from "./UserCasesList/UserCasesList";

export class User extends Component {
  state = {
    user: {},
    report: [
      {
        title: "Зібраний гуманітарний пакет",
        date: "10.09.2022",
      },
      {
        title: "Зібраний гуманітарний пакет",
        date: "11.09.2022",
      },
      {
        title: "Зібраний гуманітарний пакет",
        date: "12.09.2022",
      },
      {
        title: "Зібраний гуманітарний пакет",
        date: "13.09.2022",
      },
      {
        title: "Зібраний гуманітарний пакет",
        date: "14.09.2022",
      },
      {
        title: "Зібраний гуманітарний пакет",
        date: "15.09.2022",
      },
      {
        title: "Зібраний гуманітарний пакет",
        date: "16.09.2022",
      },
      {
        title: "Зібраний гуманітарний пакет",
        date: "17.09.2022",
      },
      {
        title: "Зібраний гуманітарний пакет",
        date: "18.09.2022",
      },
      {
        title: "Зібраний гуманітарний пакет",
        date: "19.09.2022",
      },
      {
        title: "Зібраний гуманітарний пакет",
        date: "20.09.2022",
      },
      {
        title: "Зібраний гуманітарний пакет",
        date: "21.09.2022",
      },
      {
        title: "Зібраний гуманітарний пакет",
        date: "22.09.2022",
      },
      {
        title: "Зібраний гуманітарний пакет",
        date: "23.09.2022",
      },
      {
        title: "Зібраний гуманітарний пакет",
        date: "24.09.2022",
      },
    ],
    history: [
      {
        title: "Сім'я після окупації",
        date: "10.09.2022",
      },
      {
        title: "Важкий сімейний стан",
        date: "11.09.2022",
      },
      {
        title: "Багатодінта родина",
        date: "12.09.2022",
      },
      {
        title: "Малозабезпечена робина",
        date: "13.09.2022",
      },
      {
        title: "Переселенці",
        date: "14.09.2022",
      },
      {
        title: "Переселенці",
        date: "15.09.2022",
      },
      {
        title: "Переселенці",
        date: "16.09.2022",
      },
      {
        title: "Переселенці",
        date: "17.09.2022",
      },
      {
        title: "Переселенці",
        date: "18.09.2022",
      },
      {
        title: "Переселенці",
        date: "19.09.2022",
      },
      {
        title: "Переселенці",
        date: "20.09.2022",
      },
    ],
    currentPageReport: 1,
    casesPerPageReport: 6,
    currentPageHistory: 1,
    casesPerPageHistory: 6,
    selectedReport: 1,
    selectedHistory: 1,
  };

  componentDidMount() {
    fetchUser().then((data) => {
      this.setState({ user: data });
    });

    // fetchReport().then();
    //fetchHistory().then();
  }

  paginateReport = (pageNumber) => {
    this.setState({
      currentPageReport: pageNumber,
      selectedReport: pageNumber,
    });
  };

  paginateHistory = (pageNumber) => {
    this.setState({
      currentPageHistory: pageNumber,
      selectedHistory: pageNumber,
    });
  };

  render() {
    const {
      currentPageReport,
      casesPerPageReport,
      currentPageHistory,
      casesPerPageHistory,
      report,
      history,
      selectedReport,
      selectedHistory,
    } = this.state;
    const lastCaseIndexReport = currentPageReport * casesPerPageReport;
    const firstCaseIndexReport = lastCaseIndexReport - casesPerPageReport;

    const lastCaseIndexHistory = currentPageHistory * casesPerPageHistory;
    const firstCaseIndexHistory = lastCaseIndexHistory - casesPerPageHistory;

    const currentReport = report.slice(
      firstCaseIndexReport,
      lastCaseIndexReport
    );
    const currentHistory = history.slice(
      firstCaseIndexHistory,
      lastCaseIndexHistory
    );

    const { user } = this.state;
    return (
      <div className="user__wrap">
        <ProfilePhoto
          url={user.profileUrl}
          userName={user.userName}
          email={user.email}
        />
        <UserCasesList id={user.id} />

        <div>
          <h4>Подані звіти</h4>
          <UserReportHistory
            currentArray={currentReport}
            casesPerPage={casesPerPageReport}
            arrey={report}
            paginate={this.paginateReport}
            activeKey={selectedReport}
          />
        </div>

        <div>
          <h4>Подані історії</h4>
          <UserReportHistory
            currentArray={currentHistory}
            casesPerPage={casesPerPageHistory}
            arrey={history}
            paginate={this.paginateHistory}
            activeKey={selectedHistory}
          />
        </div>
      </div>
    );
  }
}

export default User;
