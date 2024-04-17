import React, {useCallback} from 'react';
import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

import {routeNames} from '../../../utils/constans';
import step01Icon from '../../../assets/step01.png';

import styles from './styles';

const {HOME, STEP_02} = routeNames;

const Step01 = ({navigation}) => {
  const onStep02 = useCallback(
    () => navigation.navigate(STEP_02),
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
            source={step01Icon}
            style={styles.step01Icon}
          />
          <View style={styles.restView}>
            <Text style={styles.restText}>
              Encontre o<Text style={styles.rest}> restaurante </Text>
              perfeito para si.
            </Text>
            <Text style={styles.restaText}>
              Encontre rapidamente um restaurante que atende as suas
              necessidades.
            </Text>
          </View>
          <View style={styles.stepView}>
            <View style={styles.step} />
            <View style={styles.step02} />
            <View style={styles.step03} />
          </View>
          <View style={styles.ViewBtn}>
            <TouchableOpacity onPress={onStep02} style={styles.btnGo}>
              <Text style={styles.btnGoText}>Avançar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

Step01.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Step01;
