<template>
  <div class="header">
    <button @click="logout" class="logout">logout</button>
    <img @click="toIndex" :src="url">
  </div>
</template>

<script>
import {userInfo} from '@/info.json'

export default {
  name: 'user-header',
  data() {
    return {
      url: userInfo.avatar_url
    }
  },
  methods: {
    logout() {
      this.$router.push({name: 'login'})
    },
    toIndex() {
      this.$route.path !== '/user/home' && this.$router.push({path: '/user/home'})
    }
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  width: 20rem;
  margin: 2rem auto;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
}
.logout {
  border: none;
  outline: none;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: coral;
  transition: 1s;
}
.logout:hover {
  transition: 1s;
  opacity: .6;
  cursor: pointer;
}
img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
img:hover {
  cursor: pointer;
}
</style>
