import React, {
  Component,
  ListView,
  Text,
  View,
  StyleSheet,

} from 'react-native';

import * as Style from '../styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  getTheme,
  mdl
} from 'react-native-material-kit';

import {TextModule} from './modules/textModule';
import {SwitchModule} from './modules/switchModule';
import {StatusModule} from './modules/statusModule';
import {SliderModule} from './modules/sliderModule';
import {ButtonGridModule} from './modules/buttonGridModule';
import {ProgressBarModule} from './modules/progressBarModule';
import {Module} from './modules/module';

const theme = getTheme();

var modules = {
  'text': TextModule,
  'switch': SwitchModule,
  'status': StatusModule,
  'slider': SliderModule,
  'buttons': ButtonGridModule,
  'progress': ProgressBarModule,
}

function getModuleType(name) {
  var a = modules[name]
  if(a) { return a }
  else { return Module }
}

export class ModuleList extends Component {
  render() {
    var modules = this.props.modules;
    return (
      <ListView style={this.props.style}
        dataSource={modules}
        renderRow={(moduleGroup) => <ModuleContainer modules={moduleGroup}></ModuleContainer>}
      />
    );
  }
}

class ModuleContainer extends Component {
    render() {
      var props = this.props;
      var modules = this.props.modules
      return (
        <View style={[theme.cardStyle, styles.card]}>
          {
            modules.map((module) => {
              var ModuleType = getModuleType(module.type)
              return <ModuleType key={module.id} {...module}/>
            })
          }
        </View>
      );
    }
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginBottom: 10,
  }
});
