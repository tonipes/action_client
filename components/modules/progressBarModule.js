import React, {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import { mdl } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as mod from './module'
import * as Style from '../../styles';

export class ProgressBarModule extends mod.Module {
  getMiddleContent() { return(
    <View>
      { this.props.title ?
        <Text style={styles.title}>{this.props.title}</Text> : null}
      <mdl.Progress progress={0.2}/>
    </View>
  );}
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: 5,
  },
})
