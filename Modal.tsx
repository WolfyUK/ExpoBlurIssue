import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import ReactNativeModal from "react-native-modal";

import { BlurView } from "expo-blur";

export interface ModalProps {
    open: boolean;
    children: React.ReactNode;
    onClose: () => void;
    onClosed: () => void;
}

const Modal = (props: ModalProps): JSX.Element => {
    return (
        <ReactNativeModal
            isVisible={props.open}
            onDismiss={props.onClose}
            onModalHide={props.onClosed}
            onBackdropPress={props.onClose} 
            customBackdrop={<TouchableWithoutFeedback onPress={props.onClose}>
                                <BlurView tint="dark" intensity={100} style={styles.blur} />
                            </TouchableWithoutFeedback>}
        >
            <View style={styles.modal}>
                {props.children}
            </View>
        </ReactNativeModal>
    );
};

export default Modal;

const styles = StyleSheet.create({
    modal: {
        backgroundColor: "#fff",
        padding: 30,
    },
    blur: {
        flex: 1, 
        backgroundColor: "#fff",
        opacity: 1,
        ...(StyleSheet.absoluteFill as any),
    },
}); 
