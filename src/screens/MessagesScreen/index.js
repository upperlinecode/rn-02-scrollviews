import { View, StyleSheet } from 'react-native';
import Message from '../../components/Message';
import { messageData } from '../../data';

const MessageScreen = () => {
    return (
        <View style={styles.container}>
            {messageData.map((message, idx) => {
                return (
                    <Message message={message} key={`${message.text}-${idx}`} />
                );
            })}
        </View>
    );
};

export default MessageScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#34495e',
        padding: 30
    },
});
