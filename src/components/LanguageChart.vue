<template>
  <div class="chart">
    <div class="main"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import colors from '@/colors'

export default {
  props: {
    repos: {
      type: Array,
      require: true
    }
  },

  name: 'language-chart',
  watch: {
    '$route.query.name'(value, oldValue) {
      this.draw(value, this.getData())
    }
  },
  methods: {
    getData() {

      let repo = null
      for(const r of this.repos) {
        if(r.name === this.$route.query.name) {
          repo = r
          break
        }
      }

      const list = []
      for(const language of repo.dataList) {
        for(const name in language) {
          list.push({
            name,
            value: language[name]
          })
        }
      }
      return list
    },

    draw(name, data) {
      const myChart = echarts.init(document.querySelector('.main'))

      myChart.setOption({
        title: {
          text: name,
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} bytes({d}%)'
        },
        series: {
          left:'center',
          top: 'top',
          center: ['40%', '40%'],
          avoidLabelOverlap: true,
          name: 'language',
          type: 'pie',
          radius: '40%',
          data: data,
          labelLine:{
            normal:{
              length: 1
            }
          },
          itemStyle: {
            normal: {
              color: param => {
                return colors[param.name]
              },
              label: {
                show: true
              }
            }
          }
        }
      })
    },
    drawAll() {
      const hash = {}
      for(const repo of this.repos) {
        for(const languages of repo.dataList) {
          for(const [key, value] of Object.entries(languages)) {
            if(key in hash) hash[key] += value
            else hash[key] = value
          }
        }
      }
      const list = []
      for(const name in hash) {
        list.push({
          name,
          value: hash[name]
        })
      }
      this.draw('total', list)
    }
  },
  mounted() {
    if(!this.$route.query.name){
      this.drawAll()
    } else {
      const data = this.getData()
      this.draw(this.$route.query.name, data)
    }
  }
}
</script>

<style scoped>
.main {
  margin: 0 0 0 14rem;
  width: 50rem;
  height: 25rem;
}
</style>
