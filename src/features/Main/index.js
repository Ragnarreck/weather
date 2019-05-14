import React from 'react';
import get from 'lodash/get';
import {
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import { capitalize } from '../../utils/helpers';
import { Body } from './components/Body';
import { Header } from './components/Header';
import { SpinnerHOC } from '../../ui/SpinnerHOC';
import { getImageByWeatherIconCode } from '../../utils/helpers';
import { getWeatherByCoords, getWeatherByCity } from '../../utils/weather';
import styles from './styles';

export class Main extends React.Component {
  state = {
    cityForSearch: '',
    showLoader: false,
    showSearchInput: false,
  };

  componentDidMount() {
    this.getWeatherByLocation();
  }

  getWeatherByLocation = () => {
    this.setState({ showLoader: true }, () => navigator.geolocation.getCurrentPosition(position =>
      getWeatherByCoords(position.coords.latitude, position.coords.longitude)
        .then(weather => this.setState({ weather, showLoader: false }))
        .catch(err => this.setState({ showLoader: false }, () => console.log(err)))
    ));
  };

  getWeatherByCity = () => this.setState({ showLoader: true }, async () => {
    if (this.state.cityForSearch === "Kharkiv") {
      Snackbar.show({
        title: "Hi! Visit ХКТК when u have time!",
        duration: Snackbar.LENGTH_LONG,
        action: {
          title: "Close",
          color: "red",
          onPress: Snackbar.dismiss
        }
      });
    }
      try {
        const weather = await getWeatherByCity(this.state.cityForSearch);
        this.setState({ weather, showLoader: false, cityForSearch: '', showSearchInput: false });
      } catch (err) {
        this.setState({ showLoader: false }, () => {
          Snackbar.show({
            title: capitalize(err.message),
            duration: Snackbar.LENGTH_LONG,
            action: {
              title: "Close",
              color: "red",
              onPress: Snackbar.dismiss
            }
          });
        });
      }
    }
  );

  onCityChange = value => this.setState({ cityForSearch: value });

  switchSearchInputVisibility = () => this.setState(state => ({ ...state, showSearchInput: !state.showSearchInput }));

  render() {
    return (
      <SpinnerHOC open={this.state.showLoader}>
        <StatusBar hidden />
        <ImageBackground
          source={getImageByWeatherIconCode(get(this.state, 'weather.icon', undefined))}
          style={styles.imageBackground}
        >
          <View style={styles.wrapper}>
            <Header
              {...this.state}
              onCityChange={this.onCityChange}
              getWeatherByCity={this.getWeatherByCity}
              getWeatherByLocation={this.getWeatherByLocation}
              switchSearchInputVisibility={this.switchSearchInputVisibility}
            />
            <Body
              weather={this.state.weather}
              showSearchInput={this.state.showSearchInput}
              switchSearchInputVisibility={this.switchSearchInputVisibility}
            />
          </View>

        </ImageBackground>
      </SpinnerHOC>
    );
  }
}
