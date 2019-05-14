import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  appBar: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 30,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  searchInput: {
    height: 40,
    width: 150,
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 0,
    marginLeft: 5,
  },

  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
