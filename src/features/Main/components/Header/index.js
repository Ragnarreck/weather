import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export const Header = ({
                         onCityChange,
                         cityForSearch,
                         showSearchInput,
                         getWeatherByCity,
                         getWeatherByLocation,
                         switchSearchInputVisibility,
                       }) => (
  <View style={styles.appBar}>
    {showSearchInput
      ? (
        <View style={styles.searchInputContainer}>
          <TouchableOpacity onPress={getWeatherByCity}>
            <Icon name="search" size={35} color="#FFFFFF" />
          </TouchableOpacity>
          <TextInput
            value={cityForSearch}
            returnKeyType="search"
            style={styles.searchInput}
            onChangeText={onCityChange}
            onSubmitEditing={getWeatherByCity}
          />
        </View>
      )
      : (
        <TouchableOpacity onPress={switchSearchInputVisibility}>
          <Icon name="search" size={35} color="#FFFFFF" />
        </TouchableOpacity>
      )}


    <TouchableOpacity onPress={getWeatherByLocation}>
      <Icon name="navigation" size={35} color="#FFFFFF" />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onCityChange: PropTypes.func.isRequired,
  cityForSearch: PropTypes.string.isRequired,
  getWeatherByCity: PropTypes.func.isRequired,
  showSearchInput: PropTypes.bool.isRequired,
  getWeatherByLocation: PropTypes.func.isRequired,
  switchSearchInputVisibility: PropTypes.func.isRequired,
};
