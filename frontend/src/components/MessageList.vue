<template>
  <ul>
    <MessagePreview v-for="message in messages" :key="message._id" :message="message"></MessagePreview>
  </ul>
</template>

<script>
import MessagePreview from './MessagePreview';

export default {
  name: 'MessageList',
  props: {
    messages: Array
  },
  components: {
    MessagePreview
  }

}
</script>