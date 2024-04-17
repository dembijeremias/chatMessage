import React, {useCallback} from 'react';
import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import {routeNames} from '../../../utils/constans';
import step02Icon from '../../../assets/step02.png';

import styles from './styles';

const {HOME, STEP_03} = routeNames;

const Step02 = ({navigation}) => {
  const onStep03 = useCallback(
    () => navigation.navigate(STEP_03),
    [navigation],
  );
  const close = useCallback(() => navigation.navigate(HOME), [navigation]);

  return (
    <View style={styles.backgroundContainer}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <ScrollView style={styles.ScrollView}>
        <TouchableOpacity style={styles.btnClose}>
          <Text style={styles.btnCloseText}>Pular</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            source={step02Icon}
            style={styles.step01Icon}
          />
          <View style={styles.restView}>
            <Text style={styles.restText}>
              Escolha a dedo com as pesquisas{' '}
              <Text style={styles.rest}>filtradas! </Text>
            </Text>
            <Text style={styles.restaText}>
              Filtre os restaurantes por classificações, categorias, preços, etc
              e encontre o melhor para si.
            </Text>
          </View>
          <View style={styles.stepView}>
            <View style={styles.step02} />
            <View style={styles.step} />
            <View style={styles.step03} />
          </View>
          <View style={styles.ViewBtn}>
            <TouchableOpacity onPress={onStep03} style={styles.btnGo}>
              <Text style={styles.btnGoText}>Avançar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

Step02.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Step02;
