import React, {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import { MKSlider } from 'react-native-material-kit';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as mod from './module'

import * as Style from '../../styles';

export class SliderModule extends mod.Module {
  getMiddleContent() { return(
    <View>
      <MKSlider></MKSlider>
    </View>
  );}
}

const styles = StyleSheet.create({

})
