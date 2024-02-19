import { View, Text, StyleSheet } from 'react-native';

const Message = ({ message }) => {
    return (
        <View style={message.isSender ? senderStyles.container : receiverStyles.container}>
            <Text style={message.isSender ? senderStyles.text : receiverStyles.text}>
                {message.text}
            </Text>
        </View>
    );
};

export default Message;

const senderStyles = StyleSheet.create({
    container: {
        maxWidth: '40%',
        maxHeight: 300,
        alignSelf: 'flex-end',
        backgroundColor: '#2980b9',
        padding: 10,
        borderRadius: 10,
        margin: 5,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
});

const receiverStyles = StyleSheet.create({
    container: {
        maxWidth: '40%',
        maxHeight: 300,
        backgroundColor: '#bdc3c7',
        padding: 10,
        borderRadius: 10,
        margin: 5,
    },
    text: {
        color: '#000',
        fontSize: 20,
    },
});
