import { Component } from "react";
import Watch from "../watch/Watch";
import { connect } from "react-redux";
import "./Header.css";
import IHeader from "./types/IHeader";

class Header extends Component<IHeader> {
  render() {
    return (
      <header className="header">
        <div className="header-container">
          <img src="/assets/images/logo.svg" alt="" />
          <div className="header__preferences">
            <select
              onClick={(event) => this.props.changeLanguage((event.target as HTMLTextAreaElement).value)}
              className="header__select"
            >
              <option value="ru">ru</option>
              <option value="en">en</option>
            </select>
            <Watch />
          </div>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
    changeLanguage: (lang: string) => {
        const action = {type: "CHANGE_LANGUAGE", lang: lang};
        dispatch(action);
    }
});

export default connect(null, mapDispatchToProps)(Header);
