import React from 'react';
import get from 'lodash/get';
import moment from 'moment/moment';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Progress from 'react-native-progress';
import styles from './styles';

const weatherIndicators = [
  { title: 'Wind', field: 'windSpeed', units: 'm/s', progressBarColor: 'green', key: 'wind', needProgressBar: false },
  {
    title: 'Pressure',
    field: 'pressure',
    units: 'mb',
    progressBarColor: 'orange',
    key: 'rain',
    needProgressBar: false
  },
  { title: 'Humidity', field: 'humidity', units: '%', progressBarColor: 'red', key: 'humidity', needProgressBar: true }
];

export const Body = ({ weather, showSearchInput, switchSearchInputVisibility }) => (
  <TouchableWithoutFeedback onPress={() => showSearchInput && switchSearchInputVisibility()}>
    <View style={styles.body}>
      <View style={styles.commonInfo}>
        <Text style={styles.city}>{get(weather, 'city', '')}</Text>
        <Text style={styles.dateTime}>{moment().format('hh:mm a - dddd, DD MMM \'YY')}</Text>
      </View>

      <View style={styles.tempAndDescription}>
        <Text style={styles.temperature}>{get(weather, 'temp', '')}&deg;C</Text>
        <View style={styles.descriptionContainer}>
          <Image
            style={{ width: 80, height: 80 }}
            source={{ uri: `http://openweathermap.org/img/w/${get(weather, 'icon')}.png` }}
          />
          <Text style={styles.description}>{get(weather, 'description', '')}</Text>
        </View>


        <View style={styles.indicators}>
          {weatherIndicators.map(indicator => (
            <View key={indicator.key} style={styles.indicatorsBlock}>
              <View style={styles.indicatorsBlockText}>
                <Text style={styles.indicatorsBlockTitle}>{`${indicator.title}: `}</Text>
                <View style={styles.row}>
                  <Text style={styles.indicatorsBlockDigit}>{get(weather, indicator.field, '')}</Text>
                  <Text style={styles.indicatorsBlockUnits}>{`${indicator.units} `}</Text>
                </View>
              </View>
              <Progress.Bar
                height={5}
                width={100}
                progress={indicator.needProgressBar ? get(weather, indicator.field, 0) / 100 : 0.5}
                color={indicator.progressBarColor}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

Body.propTypes = {
  weather: PropTypes.object,
  showSearchInput: PropTypes.bool.isRequired,
  switchSearchInputVisibility: PropTypes.func.isRequired,
};

Body.defaltProps = {
  weather: {}
};
