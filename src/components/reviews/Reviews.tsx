import { Component } from "react";
import reviews from "../../mock/data.json";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import IReview from "./types/IReview";
import IState from "./types/IState";
import IReviewProps from "./types/IReviewProps";

class Reviews extends Component<IReviewProps> {
  state = {
    data: [],
    countOnPage: 10,
    currentPage: 1,
    currentReview: [],
  };

  componentDidMount() {
    this.setState({ data: Object.values(reviews.ru) });
    const lastReviewIndex = this.state.currentPage * this.state.countOnPage;
    const firstReviewIndex = lastReviewIndex - this.state.countOnPage;
    this.setState({ currentReview: this.state.data.slice(firstReviewIndex, lastReviewIndex) });
  }

  componentDidUpdate(prevProps: any, prevState: IState) {
    if (this.state.data !== prevState.data || this.state.currentPage !== prevState.currentPage) {
      const lastReviewIndex = this.state.currentPage * this.state.countOnPage;
      const firstReviewIndex = lastReviewIndex - this.state.countOnPage;
      this.setState({ currentReview: this.state.data.slice(firstReviewIndex, lastReviewIndex) });
    }
    if (this.props.lang !== prevProps.lang) {
      switch (this.props.lang) {
        case "ru":
          this.setState({ data: Object.values(reviews.ru) });
          break;
        case "en":
          this.setState({ data: Object.values(reviews.en) });
          break;
      }
    }
  }

  paginate = (pageNumber: number) => {
    this.setState({ currentPage: pageNumber });
  };

  formatName = (name: string) => {
    const arr = name.split(" ");
    return `${arr[0]} ${arr[1] ? arr[1][0] + "." : ""}`;
  };

  render() {
    return (
      <div>
        <ul className="reviews__list">
          {this.state.data &&
            this.state.currentReview.map((el: IReview, index: number) => {
              return (
                <li key={index}>
                  <p>
                    {this.formatName(el.name)} {el.date}
                  </p>
                  <p>{el.review}</p>
                </li>
              );
            })}
        </ul>
        <Pagination
          countOnPage={this.state.countOnPage}
          totalReviews={this.state.data.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    lang: state.lang,
  };
}

export default connect(mapStateToProps)(Reviews);
