import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    justifyContent: 'space-around',
    width: '100%',
    height: '90%',
  },

  commonInfo: {
    padding: 30,
  },

  city: {
    fontSize: 35,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  dateTime: {
    fontSize: 20,
    marginTop: 10,
    color: '#FFFFFF',
  },

  tempAndDescription: {
    padding: 30,
  },

  temperature: {
    fontSize: 100,
    color: '#FFF',
    paddingLeft: 30,
  },

  description: {
    fontSize: 25,
    color: '#FFFFFF',
  },

  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  indicators: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  indicatorsBlock: {},

  indicatorsBlockText: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  indicatorsBlockTitle: {
    fontSize: 15,
    color: '#FFFFFF',
    marginBottom: 5,
  },

  indicatorsBlockDigit: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 5,
  },

  indicatorsBlockUnits: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 5,
  },

  row: {
    flexDirection: 'row'
  }
});
