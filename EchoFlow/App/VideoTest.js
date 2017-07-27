import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, WebView } from 'react-native';
export default class VideoTest extends Component {
    render() {

        return (
            <View style={styles.container}>
                <WebView
                    source={{ uri: 'https://www.youtube.com/watch?v=nF7lv1gfP1Q' }}
                    style={styles.video}
                />
                <WebView
                    source={{ uri: 'https://www.youtube.com/watch?v=kmUqZ7zlVZQ' }}
                    style={styles.video}
                />
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
        marginTop: 20,
        maxHeight: 200,
        width: 320,
        flex: 1
    }
});