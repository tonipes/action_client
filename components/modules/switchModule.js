import React, {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import { MKCheckbox } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as mod from './module'

export class SwitchModule extends mod.Module {
  getRightContent() { return(
    <MKCheckbox
      onPress={() => console.log('switch pressed')}
      onCheckedChange={(e) => console.log('switch checked', e)}
    />
  );}
}

const styles = StyleSheet.create({

})
