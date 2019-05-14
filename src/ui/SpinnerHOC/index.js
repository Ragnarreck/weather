import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ActivityIndicator
} from 'react-native';
import styles from './styles';

export const SpinnerHOC = ({ open, children }) => open
  ? (
    <React.Fragment>
      {children}
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    </React.Fragment>
  )
  : children;

SpinnerHOC.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
