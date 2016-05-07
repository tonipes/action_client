import React, {
  Component,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import * as Style from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class Module extends Component {
  getLeftContent() {
    if(this.props.icon){
      return(<Icon style={styles.icon} name={this.props.icon}/>)
    } else {
      return null;
    }
  }

  getMiddleContent() { return(
    <View>
      { this.props.title ?
        <Text style={styles.title}>{this.props.title}</Text> : null }
      { this.props.subtext ?
        <Text style={styles.subtext}>{this.props.subtext}</Text> : null }
    </View>
  );}

  getRightContent() {}

  render() {
    var props = this.props;
    var left = this.getLeftContent();
    var middle = this.getMiddleContent();
    var right = this.getRightContent();
    return (
      <View style={styles.cardContent}>
        {left ? <View style={styles.left}>{this.getLeftContent()}</View> : null }
        {middle ? <View style={styles.middle}>{this.getMiddleContent()}</View> : null }
        {right ? <View style={styles.right}>{this.getRightContent()}</View> : null }
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  left: {
    alignItems: 'center',
    margin: 10
  },
  right: {
    alignItems: 'center',
    margin: 10
  },
  middle: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
  title: {
    fontSize: 16
  },
  subtext: {
    paddingTop: 2,
    fontSize: 12,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30

  }
});
