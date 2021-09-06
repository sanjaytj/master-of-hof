import React, { Component } from "react";

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  // display all items
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  //Display based on user type(Designers)
  fetchDesigners = () => {
    return this.state.userData
      .filter((item) => {
        if (item.user_type === "Designer") {
          return true;
        }
      })
      .map((designer) => {
        return (
          <React.Fragment key={designer.id}>
            <li className="list-elements">
              <span>Id: {designer.id}</span>
              <span>Name : {designer.name}</span>
              <span>User Type: {designer.user_type}</span>
            </li>
          </React.Fragment>
        );
      });
  };

  //Filter all the data starting with J

  usersWithNameJ = () => {
    return this.state.userData
      .filter((item) => {
        if (item.name.startsWith("J")) {
          return true;
        }
      })
      .map((designer) => {
        return (
          <React.Fragment key={designer.id}>
            <li className="list-elements">
              <span>Id: {designer.id}</span>
              <span>Name : {designer.name}</span>
              <span>User Type: {designer.user_type}</span>
            </li>
          </React.Fragment>
        );
      });
  };

  //Filter all the data based on age greater than 28 and less than or equal to 50

  filterAge = () => {
    return this.state.userData
      .filter((item) => {
        if (item.age > 28 && item.age < 50) {
          return true;
        }
      })
      .map((designer) => {
        return (
          <React.Fragment key={designer.id}>
            <li className="list-elements">
              <span>Id: {designer.id}</span>
              <span>Name : {designer.name}</span>
              <span>User Type: {designer.user_type}</span>
            </li>
          </React.Fragment>
        );
      });
  };

  //total years of designers

  yearsOfDesigners = () => {
    return this.state.userData
      .filter((item) => {
        if (item.user_type === "Designer") {
          return true;
        }
      })
      .reduce((designer1, designer2) => {
        return designer1.years + designer2.years;
      });
  };

  render() {
    return (
      // instead of a parent div tag we can also use React.Fragment
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()} </ul>
        </div>

        {/*display based on user type*/}
        <h1>Display Based on user type</h1>
        <div className="display-box">
          <ul>{this.fetchDesigners()}</ul>
        </div>

        {/*Filter all data starting with j*/}
        <h1>Filter all data starting with j</h1>
        <div className="display-box">
          <ul>{this.usersWithNameJ()}</ul>
        </div>

        {/*Filter all data greater than 28 and less than or equal to 50*/}
        <h1>Filter all data greater than 28 and less than or equal to 50</h1>
        <div className="display-box">
          <ul>{this.filterAge()}</ul>
        </div>

        {/*Total years of designers*/}
        <h1>Totla years of designers</h1>
        <div className="display-box">
          <ul>{this.yearsOfDesigners()}</ul>
        </div>
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;