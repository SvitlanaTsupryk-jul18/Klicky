import React from "react";

class Details extends React.Component {
  state = {
    isCompleted: false,
    isActive: false,
    details: []
  };

  openDetails = () => {
    this.setState(prevState => {
      return {
        isActive: !prevState.isActive
      };
    });
  };

  saveDetails = () => {
    const { setInfo, name } = this.props;

    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
      };
    });
    setInfo({ [name]: this.state.details });
  };

  render() {
    const { isCompleted, isActive } = this.state;
    return (
      <div className="details">
        <div
          className={isActive ? "details__header--active" : "details__header"}
        >
          <h2 className="details__title">{this.props.title}</h2>
          <div className="details__complete">
            {isCompleted ? "complete" : "incomplete"}
          </div>
          <button
            type="button"
            className="details__open-btn"
            onClick={this.openDetails}
          >
            <img
              className="details__arrow"
              src={
                isActive ? "./images/arrow-down.svg" : "./images/arrow-top.svg"
              }
              alt="arrow"
            />
          </button>
        </div>
        <div>{this.props.children}</div>
        <div className="details__buttons">
          <button type="button" className="details__btn btn">
            Cancel
          </button>
          <button
            type="button"
            className="details__btn btn"
            onClick={this.saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default Details;
