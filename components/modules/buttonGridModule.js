import React, {
  Text,
  View,
  StyleSheet,
  Component,
} from 'react-native';

import { MKButton } from 'react-native-material-kit';
import * as Style from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as mod from './module'
import * as Api from '../../managers/api'

class CircleButtonWrapper extends Component {
  onPress() { Api.run_action(this.props.action) }

  render() {
    return (
      <View style={styles.buttonContainer}>
        <MKButton
          fab={true}
          style={styles.fab}
          backgroundColor={Style.colors.success}
          onPress={ ()=>{ this.onPress() } }
          >
          { this.props.icon ?
            <Icon style={[mod.styles.icon, styles.icon]} name={this.props.icon}/> : null}
        </MKButton>
      </View>
    );
  }
}

export class ButtonGridModule extends mod.Module {
  getMiddleContent() {
    return (
    <View style={styles.buttonContent}>
      {this.props.buttons.map((config) => {
        return (
          <CircleButtonWrapper key={config.id} action={config.action} icon={config.icon}></CircleButtonWrapper>
        )})}
    </View>
  );}
}


const styles = StyleSheet.create({
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
    // borderRadius: 100,
  },
  icon: {
    backgroundColor: 'rgba(0,0,0,0)',
  }
})
