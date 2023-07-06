import * as React from "react";
import { Component } from "react";
import "./Reviews.css";

interface IPaginationProps {
  countOnPage: number;
  totalReviews: number;
  paginate(pageNumber: number): void;
}

export default class Pagination extends Component<IPaginationProps> {
  state = {
    pageNumbers: [],
  };

  componentDidUpdate(prevProps: IPaginationProps) {
    if (
      this.props.countOnPage !== prevProps.countOnPage ||
      this.props.totalReviews !== prevProps.totalReviews
    ) {
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(this.props.totalReviews / this.props.countOnPage); i++) {
        pageNumbers.push(i);
      }
      this.setState({
        pageNumbers: [...pageNumbers],
      });
    }
  }
  render() {
    return (
      <div className="pagination">
        <ul className="pagination__list">
          {this.state.pageNumbers.map((el, index) => {
            return (
              <li className="pagination__item" key={index}>
                <a className="pagination__link" href="!#" onClick={() => this.props.paginate(el)}>
                  {el}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
