<template>
  <main class="message-dashboard">
    <MessageList v-if="messages" :messages="messages"></MessageList>
    <div v-else>Loading...</div>
  </main>
</template>

<script>
import { messageService } from '../services/message-service';
import MessageList from '../components/MessageList';

export default {
  name: 'MessageDashboard',
  data() {
    return {
      messages: null
    }
  },
  created() {
    this.query();
  },
  methods: {
    async query() {
      this.messages = await messageService.query();
    }
  },
  components: {
    MessageList
  }
}
</script>