import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, WebView, Dimensions } from 'react-native';

export default class VideoTest extends Component {

    formatHtml() {
        let url = 'http://127.0.0.1:5000/api/video_feed';
        return ('<img src="' + url + '" alt="Camera Feed" width="100%" style="background-color: white; min-height: 100%; min-width: 100%; position: fixed; top: 0; left: 0;"/>');
    }
    render() {
        console.log(this.formatHtml());
        return (
            <View style={styles.container}>
                <WebView
                    style={styles.video}
                    automaticallyAdjustContentInsets={true}
                    scalesPageToFit={true}
                    startInLoadingState={false}
                    contentInset={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    scrollEnabled={false}
                    source={{ html: this.formatHtml() }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    video: {
        margin: 20,
        maxHeight: (Dimensions.get('window').height) / 3,
        width: Dimensions.get('window').width,
        flex: 1
    },
});