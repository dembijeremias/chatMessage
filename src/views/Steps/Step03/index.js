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
import step03Icon from '../../../assets/step03.png';

import styles from './styles';

const {HOME} = routeNames;

const Step03 = ({navigation}) => {
  const close = useCallback(() => navigation.navigate(HOME), [navigation]);

  return (
    <View style={styles.backgroundContainer}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <ScrollView style={styles.ScrollView}>
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            source={step03Icon}
            style={styles.step01Icon}
          />
          <View style={styles.restView}>
            <Text style={styles.restText}>
              Desfrute no restaurante <Text style={styles.rest}>ideal </Text>
              para si.
            </Text>
            <Text style={styles.restaText}>
              Desfrute da melhor experiencia e acessível ao seu bolço. Comece
              agora mesmo!
            </Text>
          </View>
          <View style={styles.stepView}>
            <View style={styles.step02} />
            <View style={styles.step03} />
            <View style={styles.step} />
          </View>
          <View style={styles.ViewBtn}>
            <TouchableOpacity onPress={close} style={styles.btnGo}>
              <Text style={styles.btnGoText}>Começar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

Step03.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Step03;
