<template>
  <div class="user">
    <user-header></user-header>
    <router-view id="view"></router-view>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader'

export default {
  name: 'User',
  components: {UserHeader}
}
</script>

<style scoped>
.user {
  text-align: center;
}

</style>
