import React from "react";

export class FormSelectorsButtons extends React.Component {
  render() {
    return (
      <form className="form-selectors-buttons" method="POST">
        <button type="submit" className="selector-button">
          Все рейсы
        </button>
        <button type="submit" className="selector-button">
          Прилет
        </button>
        <button type="submit" className="selector-button">
          Вылет
        </button>
      </form>
    );
  }
}
