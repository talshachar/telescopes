<template>
  <li>
    <pre>{{ message }}</pre>
  </li>
</template>

<script>
export default {
  name: 'MessagePreview',
  props: {
    message: Object
  }

}
</script>