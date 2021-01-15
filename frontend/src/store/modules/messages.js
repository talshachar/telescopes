import { messageService } from '../../services/message-service';

export default {
  state: {
    messages: null,
  },
  getters: {
    messages(state) {
      return state.messages;
    },
  },
  mutations: {
    setMessages(state, { messages }) {
      state.messages = messages;
    },
    addMessage(state, message) {
      state.messages?.unshift(message);
    },
    removeMessage(state, { message }) {
      const idx = state.messages.findIndex(({ _id }) => _id === message.id);
      state.messages.splice(idx, 1);
    }
  },
  actions: {
    async getMessages({ commit }) {
      try {
        const messages = await messageService.query();
        commit({ type: 'setMessages', messages });
      } catch (err) {
        console.log('Cannot get messages', err)
      }
    },
    async writeMessage({ commit }, message) {
      try {
        await messageService.write(message);
        commit('addMessage', message);
      } catch (err) {
        console.log('Cannot send message', err)
      }
    },
    async removeMessage({ commit }, messageId) {
      try {
        await messageService.remove(messageId);
        commit('removeMessage', message);
      } catch (err) {
        console.log('Cannot delete message', err)
      }
    }
  }
}