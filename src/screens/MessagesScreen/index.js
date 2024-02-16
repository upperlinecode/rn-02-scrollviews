import { View, ScrollView, StyleSheet } from 'react-native';
import Message from '../../components/Message';
import { messageData } from '../../data';

const MessageScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {messageData.map((message, idx) => {
                    return (
                        <Message message={message} key={`${message.text}-${idx}`} />
                    );
                })}
            </View>
        </ScrollView>
    );
};

export default MessageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        padding: 30
    },
});
