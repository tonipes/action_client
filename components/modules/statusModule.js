import React, {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as mod from './module'
import * as Style from '../../styles';

export class StatusModule extends mod.Module {
  getRightContent() { return(
    <Icon
      style={mod.styles.icon}
      color={COLORS[this.props.status]}
      name="radio-button-checked"/>
  );}
}

const styles = StyleSheet.create({

})

const COLORS = {
  0: Style.colors.unknown,
  1: Style.colors.success,
  2: Style.colors.warning,
  3: Style.colors.error,
};
