import { useToast } from "vue-toastification";
const toast = useToast();

export const notificationService = {

    general() {
        const chatSocket = new WebSocket('ws://' + import.meta.env.VITE_API_URL + '/ws/chat/notification/');
        chatSocket.onmessage = function (e) {
            const data = JSON.parse(e.data);
            const message = data['message'];
            console.log(message)
            toast(message)
            return message
            // Handle incoming message
        };
        chatSocket.onclose = function (e) {
            console.error('Chat socket closed unexpectedly');
        };
    }
}