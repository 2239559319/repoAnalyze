<template>
  <div class="home">
    <div class="image">
      <img :src="user.avatar_url">
    </div>
    <h2>{{user.login}}</h2>
    <span>{{user.name}}</span>
    <div class="follow">
      <div class="follow-list">
        <h3>{{user.followers}}</h3>
        <p>Followers</p>
      </div>
      <div class="follow-list">
        <h3>{{user.following}}</h3>
        <p>Following</p>
      </div>
      <div class="follow-list">
        <h3>{{user.public_repos}}</h3>
        <p>Public_repos</p>
      </div>
    </div>
    <div class="info">
      <div class="itemlist">
        <div class="info-item">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
          <span>{{user.html_url}}</span>
        </div>
        <div class="info-item">
          <svg viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
          <span>{{user.location}}</span>
        </div>
        <div class="info-item">
          <svg viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
          <span>{{user.email}}</span>
        </div>
      </div>
      <div class="statics">
        <button @click="toRepos">repos</button>
      </div>
    </div>
  </div>
</template>

<script>
import {userInfo} from '@/info.json'

export default {
  name: 'user-home',
  data() {
    return {
      user: userInfo
    }
  },
  methods: {
    toRepos() {
      this.$router.push({path: '/user/repos'})
    }
  }
}
</script>

<style scoped>
.home {
  width: 40rem;
  margin: 8rem auto 0 auto;
  padding-top: 3rem;
  text-align: center;
  border: solid 1px #000;
}
.image {
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1rem auto;
}
.image > img {
  width: auto;
  height: 100%;
}
.follow {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.info {
  margin-top: 3rem;
  text-align: left;
  display: flex;
  justify-content: space-around;
}

.info .info-item {
  display: flex;
  align-items: center;
}

.info svg {
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
}



.info button {
  width: 4rem;
  height: 2rem;
  outline: none;
  border: none;
  transition: 1s;
}
.info button:hover {
  transition: 1s;
  background-color: #d295a3;
  cursor: pointer;
}
</style>
