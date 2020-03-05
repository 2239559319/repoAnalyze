<template>
  <div class="home">
    <repos-side :repos="repos"></repos-side>
    <language-chart :repos="repos"></language-chart>
  </div>
</template>

<script>
import LanguageChart from './LanguageChart'
import ReposSide from './ReposSide'
import {repos} from '@/info.json'

export default {
  name: 'Repos',
  data() {
    return {
      repos: repos,
    }
  },

  components: {ReposSide, LanguageChart},
  methods: {
    // selectLanguage(name) {
    //   for(const repo of this.repos) {
    //     if(name === repo.name) {
    //       this.selectedRepo = repo
    //       return
    //     }
    //   }
    // }
  }
}
</script>

<style scoped>
.home {
  width: 40rem;
  margin: 8rem auto 0 5rem;
}
#repo {
  width: 50rem;
  height: 40rem;
}
</style>
