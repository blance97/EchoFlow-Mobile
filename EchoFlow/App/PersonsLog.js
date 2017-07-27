import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import PTRView from 'react-native-pull-to-refresh';

export default class VideoFeed extends Component {

    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        fetch('http://127.0.0.1:5000/api/getList').then((res) => res.json()).then((resJson) => {
            console.log(resJson);
            this.setState({ list: resJson })
        })
    }
    static navigationOptions = {
        title: 'Log',
    };

    render() {
        return (
            <PTRView onRefresh={() => this.componentDidMount()} >
                <ScrollView automaticallyAdjustContentInsets={false}>
                    <List containerStyle={{ marginBottom: 20 }}>
                        {
                            this.state.list.map((l, i) => (
                                <ListItem
                                    key={i}
                                    title={l.name}
                                    subtitle={l.DateTime}
                                    leftIcon={{ name: "person-pin" }}
                                />
                            ))
                        }
                    </List>
                </ScrollView>
            </PTRView>
        )
    }
}