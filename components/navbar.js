import React, {
  Text,
  View,
  StyleSheet,
  Component
} from 'react-native';

import * as Material from 'react-native-material-kit';
import * as Style from '../styles';

const NAV_BAR_HEIGHT = 60;
const STATUS_BAR_HEIGHT = 20;
const BAR_COLOR = Style.colors.main

export class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var rb = this.props.rightButtons;
    var lb = this.props.rightButtons;
    return (
      <View style={styles.container}>
        <View style={styles.statusbar}>
          <Text></Text>
        </View>
        <View style={styles.navbar}>
          <Text>navbar</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BAR_COLOR,
  },
  navbar: {
    height: NAV_BAR_HEIGHT,
  },
  navbarTitle: {
    fontSize: 20,
    color: Style.colors.lightText,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: Style.colors.warning,
  },
})
