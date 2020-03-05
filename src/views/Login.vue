<template>
  <div class="wrap">
    <div class="pic">
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
    </div>
    <div class="input">
      <span class="javascript-input--arrow">
        <!--  前置内容    -->
      </span>
      <span @click="submit" class="enter">
        <!--  后置元素    -->
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-right fa-w-14 fa-3x"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" class=""></path></svg>
      </span>
      <input v-model="userId">
    </div>
    <div v-if="loading" class="loading">
      <span>loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      userId: '',
      loading: false
    }
  },
  methods: {
    submit() {
      localStorage.setItem('user', this.userId)
      this.loading = true

      import('@/info.json').then(data => {
        if(this.userId === data.userInfo.login) {
          this.$router.push({path: '/user/home'})
        } else {
          alert('账户名错误')
          return
        }
      })
    }
  },
  created() {
    this.userId = localStorage.getItem('user') ? localStorage.getItem('user') : ''
  }
}
</script>

<style scoped>
.wrap {
  margin-top: 10rem;
  text-align: center;
}
.pic {
  margin: 0 auto;
  width: 10rem;
  height: 10rem;
}
.input {
  margin: 2rem auto 0 auto;
  width: 20rem;
  height: 3rem;
  position: relative;
}
.input > input {
  padding-left: 2rem;
  width: 20rem;
  height: 3rem;
  border: 1px solid #000000;
  outline: none;
  font-size: 2rem;
  transition: .5s;
}
.input > input:focus {
  border: 1px solid #e45956;
  transition: .5s;
}
.input > .javascript-input--arrow {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(45deg);
  top: 50%;
  left: 5px;
  margin-top: -9px;
  position: absolute;
}
.input > .enter {
  font-size: 2rem;
  display: inline-block;
  position: absolute;
  top: .4rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  margin-right: -2rem;
  transition: 1s;
}
.input > .enter:hover {
  transition: 1s;
  color: chocolate;
  cursor: pointer;
}
.loading {
  font-size: 3rem;
  transition: .5s;
  margin-top: 5rem;
}
</style>
