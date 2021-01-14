<template>
  <form class="message-compose">
    <input type="text" placeholder="Sender" /><br />
    <input type="text" placeholder="Receiver" /><br />
    <input type="text" placeholder="Subject" /><br />
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </form>
</template>

<script>
import { messageService } from '../services/message-service';

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
  }
}
</script>