import React, {
  Component,
  ListView,
  Text,
  View,
  StyleSheet,

} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Material from 'react-native-material-kit';

const theme = Material.getTheme();

export class TextModule extends Component {
  render() {
    var props = this.props;
    return (
        <View style={styles.content}>
          <Icon style={styles.icon} name={props.icon}/>
          <View style={styles.middle}>
            <Text style={styles.title}>
              {props.title}
            </Text>
            <Text style={styles.body}>
              {props.body}
            </Text>
          </View>
        </View>
    );
  }
}

export class StatusModule extends Component {
  colors = {
    0: Material.MKColor.Grey,
    1: Material.MKColor.Green,
    2: Material.MKColor.Orange,
    3: Material.MKColor.Red,
  };

  render() {
    var props = this.props;
    return (
      <View style={styles.content}>
        <Icon style={styles.icon} name={props.icon}/>
        <View style={[styles.middle,styles.content]}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
        <Icon
          style={styles.statusicon}
          color={this.colors[props.status]}
          name="radio-button-checked"/>
      </View>
    );
  }
}

var MODULES = {
  'trafficlight': StatusModule,
  'text': TextModule
}

export class ModuleList extends Component {
  render() {
    var modules = this.props.modules;
    return (
      <ListView style={this.props.style}
        dataSource={modules}
        renderRow={(moduleData) => <Module {...moduleData}></Module>}
      />
    );
  }
}

export class Module extends Component {
  getModuleClass(t) { return MODULES[t] }

  render() {
    var props = this.props;
    var ModuleClass = this.getModuleClass(props.type)
    return (
      <View style={[theme.cardStyle, styles.card]}>
        <ModuleClass {...props}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    flex: 1,
  },
  body: {
    paddingTop: 2,
    fontSize: 16,
    color: Material.MKColor.Grey,
  },
  middle: {
    paddingHorizontal: 5,
  },
  subtitle: {
    color: Material.MKColor.Grey,
    fontSize: 14,
    paddingHorizontal: 5,
  },
  icon: {
    fontSize: 20,
  },
  statusicon: {
    fontSize: 25,
  }

});
