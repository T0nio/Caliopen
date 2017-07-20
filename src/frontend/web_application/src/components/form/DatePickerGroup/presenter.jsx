import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker'; // https://github.com/Hacker0x01/react-datepicker
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import classnames from 'classnames';

import './style.scss';

class DatePickerGroup extends Component {
  static propTypes = {
    calendarClassName: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    inputClassName: PropTypes.string,
    label: PropTypes.string,
    locale: PropTypes.string,
    onDateChange: PropTypes.func.isRequired,
    selected: PropTypes.instanceOf(Date),
  };
  static defaultProps = {
    calendarClassName: null,
    className: null,
    inputClassName: null,
    label: null,
    locale: undefined,
    selected: null,
  };

  state = {
    startDate: null,
  };

  render() {
    const {
      calendarClassName,
      className,
      id,
      inputClassName,
      label,
      locale,
      onDateChange,
      selected,
      ...props
    } = this.props;

    return (
      <div className={classnames('m-date-picker-group', className)}>

        {label && <label htmlFor={id}>{label}</label> }

        <DatePicker
          id={id}
          className={classnames('m-date-picker-group__input', inputClassName)}
          calendarClassName={classnames('m-date-picker-group__calendar', calendarClassName)}
          selected={selected ? moment(selected) : null}
          onChange={onDateChange}
          locale={locale}
          {...props}
        />
      </div>

    );
  }
}

export default DatePickerGroup;
