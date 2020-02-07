import React from 'react';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alerts = ({ alerts }) =>
    <Alert key={alerts.id} variant={alerts.variant}>
      {alerts.msg}
    </Alert>

Alerts.propTypes = {
  alerts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alerts
});

export default connect(mapStateToProps)(Alerts);