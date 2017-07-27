import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import VideoFeed from './VideoFeed';
import PersonsLog from './PersonsLog';
import VideoTest from './VideoTest';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View >
        <View style={styles.images}>
          <Image
          style={{width:'100%'}}
            source={require('./logo.jpeg')}
          />
        </View>
        <Button
          large
          iconRight
          buttonStyle={styles.button}
          backgroundColor="#841584"
          onPress={() => this.props.navigation.navigate('Feed')}
          icon={{ name: 'videocam' }}
          title='Live Feed' />
        <Button
          large
          iconRight
          buttonStyle={styles.button}
          backgroundColor="#841584"
          onPress={() => this.props.navigation.navigate('Log')}
          icon={{ name: 'event-note' }}
          title='Logs' />
        <Button
          large
          iconRight
          buttonStyle={styles.button}
          backgroundColor="#841584"
          onPress={() => this.props.navigation.navigate('VideoTest')}
          icon={{ name: 'event-note' }}
          title='Test' />
      </View>
    )
  }
}
const SimpleApp = StackNavigator({
  Home: { screen: App },
  Feed: { screen: VideoFeed },
  Log: { screen: PersonsLog },
  VideoTest: { screen: VideoTest },
});

const styles = StyleSheet.create({
  images: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20
  },
});
AppRegistry.registerComponent('EchoFlow', () => SimpleApp)