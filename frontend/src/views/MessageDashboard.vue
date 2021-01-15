<template>
  <main class="message-dashboard">
    <router-link to="/mail/compose">Compose</router-link>
    <router-link to="/mail/inbox">Inbox</router-link>
    <router-link to="/mail/sent">Sent</router-link>
    <MessageList v-if="messages" :messages="messages"></MessageList>
    <div v-else>Loading...</div>
  </main>
</template>

<script>
import MessageList from '../components/MessageList';

export default {
  name: 'MessageDashboard',
  computed: {
    messages() {
      const messages = this.$store.getters.messages;
      const directory = this.$route.params.directory === 'sent' ? 'sender': 'receiver';
      const user = { _id: 'u1'}; // Mock data
      return messages?.filter(message => message[directory]._id === user._id);
    }
  },
  created() {
    this.$store.dispatch('getMessages');
  },
  components: {
    MessageList
  }
}
</script>