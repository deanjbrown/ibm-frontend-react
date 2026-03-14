import { Component } from "react";

class ContentRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      // Please note, it is bad practise to have fucntions in state like this
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },

      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
    };
  }
  render() {
    return (
      <div className="contentRating">
        <p>Some content to rate</p>
        <div className="ratingButtons">
          <button className="likeButton" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislikeButton" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
        <p>
          <b>Total Ratings:</b> {this.state.totalRatings}
        </p>
      </div>
    );
  }
}

export default ContentRating;
