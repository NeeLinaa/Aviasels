import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/action';
import { changeFilters } from '../../utilits';

import './Filters.scss';

const Filters = ({ otherCheckboxes, changeCheckOn, changeCheckOff, changeOneCheckOn, changeMainCheckOff }) => {
  const allFilters = [
    { name: 'withoutTransfers', value: 'Без пересадок', id: 1 },
    { name: 'oneTransfers', value: '1 пересадка', id: 2 },
    { name: 'twoTransfers', value: '2 пересадки', id: 3 },
    { name: 'threeTransfers', value: '3 пересадки', id: 4 },
  ];

  const changeAllCheck = (evn) => {
    if (evn.target.checked) {
      changeCheckOn();
    } else {
      changeCheckOff();
    }
  };

  const filters = allFilters.map((elem) => (
    <div key={elem.name} className="checkbox">
      <label htmlFor={elem.id} className="check">
        <input
          id={elem.id}
          type="checkbox"
          className="checkInput otherCheckbox"
          checked={otherCheckboxes[elem.id]}
          onChange={(evn) => changeFilters(evn, otherCheckboxes, changeOneCheckOn, changeCheckOn, changeMainCheckOff)}
        />
        <span className="checkBox" />
        <span className="text">{elem.value}</span>
      </label>
    </div>
  ));

  return (
    <div className="filtersCard">
      <p className="text mainText">КОЛИЧЕСТВО ПЕРЕСАДОК</p>

      <div key="all" className="checkbox">
        <label htmlFor="all" className="check">
          <input
            id="all"
            type="checkbox"
            className="checkInput mainCheckbox"
            checked={otherCheckboxes[0]}
            onChange={(evn) => changeAllCheck(evn)}
          />
          <span className="checkBox" />
          <span className="text">Все</span>
        </label>
      </div>

      <div>{filters}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({ otherCheckboxes: state.checkboxes.otherCheckboxes });

Filters.defaultProps = {
  otherCheckboxes: {},
  changeCheckOff: () => {},
  changeOneCheckOn: () => {},
  changeMainCheckOff: () => {},
  changeCheckOn: () => {},
};

Filters.propTypes = {
  otherCheckboxes: PropTypes.shape({
    0: PropTypes.bool,
    1: PropTypes.bool,
    2: PropTypes.bool,
    3: PropTypes.bool,
    4: PropTypes.bool,
  }),
  changeCheckOff: PropTypes.func,
  changeOneCheckOn: PropTypes.func,
  changeMainCheckOff: PropTypes.func,
  changeCheckOn: PropTypes.func,
};

export default connect(mapStateToProps, actions)(Filters);
