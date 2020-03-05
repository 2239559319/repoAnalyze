<template>
  <div>
    <button @click="get">click</button>
  </div>
</template>

<script>

export default {
  name: 'Test',
  methods: {
    get() {
      axios.get('https://api.github.com/repos/2239559319/web/languages')
      .then(v => v.data)
      .then(v => {
        console.log(v)
      })
    }
  }
}
</script>

<style scoped>

</style>
