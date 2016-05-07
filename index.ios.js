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

import { ModuleList } from './components/moduleList'
import { NavBar } from './components/navbar'
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationBar from 'react-native-navbar';
import * as Material from 'react-native-material-kit';
import * as Style from './styles';
import * as Mocks from './mocks';
import * as Api from './managers/api'

class reactNativeOmni extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var data = []
    this.state = {
      db: data,
      dataSource: ds.cloneWithRows(data),
    }
  }

  componentDidMount() {
      this.fetchData();
      setInterval(() => this.fetchData(), 1000);
  }

  fetchData() {
    console.log("get_modules")
    Api.get_modules()
      .then((d) => {
        console.log(d)
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(d),
          db: d,
        });
      })
      .catch((r) => {
        console.log("catch")
        console.log(r);
      })
  }

  // <NavigationBar
  //   title={config.title}
  //   statusBar={config.statusBar}
  //   style={styles.topBar}
  //   leftButton={settingsButton}
  // />
  render() {
    const settingsButton = {
      title: <Icon style={styles.navicon} name="menu"/>,
      tintColor: 'white',
      handler: () => alert('hello!'),
    };
    return (
      <View style={styles.container}>
        <NavigationBar
          title={config.title}
          statusBar={config.statusBar}
          style={styles.topBar}
        />
        <ModuleList
          style={styles.list}
          modules={this.state.dataSource}>
        </ModuleList>
      </View>
    );
  }
}

const config = {
  title: {
    title: 'Dashboard',
    tintColor: Style.colors.lightText,
  },
  statusBar: {
    tintColor: Style.colors.main,
    style: 'light-content'
  },
}
const styles = StyleSheet.create({
  topBar: {
    backgroundColor: Style.colors.main,
  },
  container: {
    flex: 1,
    backgroundColor: Style.colors.background,
  },
  list: {
    paddingVertical: 10
  },
  navicon: {
    fontSize: 30,
    marginLeft: 8
  }
});

AppRegistry.registerComponent('reactNativeOmni', () => reactNativeOmni);
