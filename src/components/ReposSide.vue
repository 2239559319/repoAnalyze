<template>
  <div class="bar">
    <div v-for="item in repos" :key="item.name" class="item">
      <div :style="{backgroundColor: item.color}" class="language-color"></div>
      <span @click="select">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repos: {
      type: Array,
      require: true
    }
  },
  name: 'repos-side',
  methods: {
    select(e) {
      this.$router.push({path: `/user/repos`, query: {name: e.target.textContent}})
    }
  }
}
</script>

<style scoped>
.bar {
  width: 12rem;
  height: 80vh;
  text-align: left;
  position: fixed;
  top: 5rem;
  overflow-y: scroll;
}
.bar > .item {
  height: 2rem;
  display: flex;
  align-items: center;
}
.bar span {
  line-height: 20px;
}
.bar span:hover {
  transition: 1s;
  cursor: pointer;
  background-color: chocolate;
  opacity: .8;
}
.language-color {
  margin-right: 1rem;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  box-sizing: border-box;
}
</style>
