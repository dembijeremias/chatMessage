import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  backgroundContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: Dimensions.get('screen').height,
  },
  rest: {
    backgroundColor: '#D1EB6D',
    borderRadius: 8,
  },
  restText: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  restaText: {
    marginTop: 10,
    color: '#000',
    fontSize: 14,
  },
  restView: {
    width: '80%',
    marginTop: 36,
    marginBottom: 80,
  },
  step01Icon: {
    width: 350,
    height: 355,
  },
  stepView: {
    position: 'absolute',
    left: 40,
    bottom: 200,
    flexDirection: 'row',
    marginBottom: 60,
  },
  ViewBtn: {
    marginTop: 72,
  },
  btnGo: {
    backgroundColor: '#D1EB6D',
    width: 330,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  btnGoText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  step: {
    left: 20,
    backgroundColor: '#D1EB6D',
    width: 40,
    height: 5,
    marginTop: 12,
  },
  step02: {
    backgroundColor: '#c1c1c1',
    width: 40,
    height: 5,
    marginTop: 12,
  },
  step03: {
    left: 10,
    backgroundColor: '#c1c1c1',
    width: 40,
    height: 5,
    marginTop: 12,
  },
  btnClose: {
    position: 'absolute',
    top: 50,
    right: 30,
  },
  btnCloseText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ScrollView: {
    width: '100%',
  },
});
