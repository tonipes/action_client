/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  ListView
} from 'react-native';

import * as Material from 'react-native-material-kit';

import {
  TRModuleList
} from './components'

var MOCK_DATA = {
  modules: [
    {type: "trafficlight",  icon: 'stars',       title: "Traffic Light 1", subtitle: "All Good!",  status: 1},
    {type: "trafficlight",  icon: 'today',     title: "Traffic Light 2", subtitle: "Warning!",   status: 2},
    {type: "trafficlight",  icon: 'work',       title: "Traffic Light 3", subtitle: "Critical!",  status: 3},
    {type: "trafficlight",  icon: 'settings', title: "Traffic Light 0", subtitle: "Unknown!",   status: 0},
    {type: "text",          icon: 'favorite',        title: "Text 0 ",         body: "Hello from text module"},
    {type: "text",          icon: 'check-circle', title: "Text 1",          body: "Hello again!"},
  ]
};

class reactNativeOmni extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(MOCK_DATA.modules),
    }
  }

  componentDidMount() {
      // this.fetchData();
  }

  render() {
    return (
      <View style={styles.container}>
        <TRModuleList
          style={styles.list}
          modules={this.state.dataSource}>
        </TRModuleList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Material.MKColor.Silver,
  },
  list: {
    paddingVertical: 20
  }
});

AppRegistry.registerComponent('reactNativeOmni', () => reactNativeOmni);
