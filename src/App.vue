<template>
  <div id="app">
    <router-view :localStorageKey="'my_key'"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style lang="scss">
  @import '@/assets/scss/styles.scss';
</style>