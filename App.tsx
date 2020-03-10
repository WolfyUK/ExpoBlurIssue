import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Modal from "./Modal";
import { BlurView } from "expo-blur";

export default class App extends React.Component<{}, {
    modalOpen: boolean,
    openCount: number,
    closeCount: number,
}> {
    constructor(props: {}) {
        super(props);

        this.state = {
            modalOpen: false,
            openCount: 0,
            closeCount: 0,
        }
    }

    render() {
        return (
            <>
                <View style={styles.view}>
                    <Text>
                        I should be blurred on iOS...
                    </Text>
                </View>
                <View style={styles.container}>
                    <Image style={{ width: 100, height: 100 }} source={{ uri: "https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png" }} />
                    <BlurView tint="light" intensity={50} style={styles.fill}></BlurView>
                </View>
                <View style={styles.view}>
                    <View style={styles.view}>
                        <Button onPress={this.handleModalOpen} title="Open modal" />
                    </View>
                    <View style={styles.view}>
                        <Text>
                            openCount: {this.state.openCount}
                        </Text>
                        <Text>
                            closeCount: {this.state.closeCount}
                        </Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <Text>
                        ...but &lt;BlurView&gt; has no effect on Android
                    </Text>
                </View>
                <Modal
                    open={this.state.modalOpen}
                    onClose={this.handleModalClose}
                    onClosed={this.handleModalClosed}
                >
                    <View>
                        <Text>
                            Tap the button or outside the modal to close it
                            {"\n\n"}
                        </Text>
                        <Button title="Close" onPress={this.handleModalClose} />
                    </View>
                </Modal>
            </>
        );
    }

    private handleModalOpen = () => {
        this.setState({
            modalOpen: true,
            openCount: this.state.openCount + 1,
        });
    }

    private handleModalClose = () => {
        this.setState({
            modalOpen: false,
        });
    }

    private handleModalClosed = () => {
        this.setState({
            closeCount: this.state.closeCount + 1,
        });
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#ffe",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    fill: {
        ...(StyleSheet.absoluteFill as any),
    },
});
