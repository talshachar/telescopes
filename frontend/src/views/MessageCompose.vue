<template>
  <form @submit.prevent="sendMessage" class="message-compose">
    <input v-model="message.sender" type="text" placeholder="Sender" /><br />
    <input v-model="message.receiver" type="text" placeholder="Receiver" /><br />
    <input v-model="message.subject" type="text" placeholder="Subject" /><br />
    <textarea v-model="message.text" name="" id="" cols="30" rows="10"></textarea>
    <button>Send</button>
  </form>
</template>

<script>
// const clone = require('rfdc')();

export default {
  name: 'MessageCompose',
  data() {
    return {
      message: {
        sender: '',
        receiver: '',
        subject: '',
        text: ''
      }
    }
  },
  methods: {
    sendMessage() {
      const message = this.$clone(this.message);
      this.$store.dispatch('writeMessage', message);
    }
  }
}
</script>