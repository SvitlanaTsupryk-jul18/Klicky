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
      <div className={isActive ? "details details--active" : "details"}>
        <div className="details__header">
          <h2 className="details__title">{this.props.title}</h2>
          <div>
            <div
              className={
                isCompleted
                  ? "details__complete details__complete--active"
                  : "details__complete"
              }
            >
              {isCompleted ? "complete" : "incomplete"}
            </div>
            <button
              type="button"
              className="details__open-btn"
              onClick={this.openDetails}
            >
              <svg
                className="details__arrow"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isActive && (
          <>
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
          </>
        )}
      </div>
    );
  }
}

export default Details;
