import thunderstorm from '../assets/thunderstorm.jpg';
import rain from '../assets/rain.jpg';
import snow from '../assets/snow.png';
import clear from '../assets/clear.jpg';
import clouds from '../assets/clouds.png';

export const capitalize = str => str[0].toUpperCase() + str.slice(1);

export const getImageByWeatherIconCode = (code) => {
  const weatherStates = [
    { image: snow, codes: ['13'].reduce((acc, item) => ([...acc, `${item}d`, `${item}n`]), []) },
    { image: clear, codes: ['01'].reduce((acc, item) => ([...acc, `${item}d`, `${item}n`]), []) },
    { image: rain, codes: ['09', '10'].reduce((acc, item) => ([...acc, `${item}d`, `${item}n`]), []) },
    { image: thunderstorm, codes: ['11'].reduce((acc, item) => ([...acc, `${item}d`, `${item}n`]), []) },
    { image: clouds, codes: ['02', '03', '04'].reduce((acc, item) => ([...acc, `${item}d`, `${item}n`]), []) }
  ];
  const currentWeatherState = weatherStates.find(state => state.codes.includes(code));
  return code && currentWeatherState ? currentWeatherState.image : clear;
};
