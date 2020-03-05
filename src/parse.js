const colors = require('./colors')
const request = require('request')
const fs = require('fs')
const path = require('path')

const access_token = ''
const user = '2239559319'
const url = 'https://api.github.com'

const headers = {
  'Authorization': `token ${access_token}`,
  'User-Agent': `${user}`
}

async function getUserInfo() {
  return new Promise(resolve => {
    request.get(`${url}/users/${user}`, {
      headers
    }, (err, res, body) => {
      const {
        login,
        id,
        avatar_url,       //头像地址
        html_url,         //主页地址
        name,             //名字
        blog,
        location,
        email,
        bio,
        public_repos,
        followers,
        following,
        created_at,
        updated_at
      } = JSON.parse(body)
      resolve({userInfo: {
          login,
          id,
          avatar_url,       //头像地址
          html_url,         //主页地址
          name,             //名字
          blog,
          location,
          email,
          bio,
          public_repos,
          followers,
          following,
          created_at,
          updated_at
        }})
    })
  })
}

async function getRepos() {
  return new Promise(resolve => {
    request.get(`${url}/users/${user}/repos`, {
      headers
    }, (err, res, body) => {
      const jsonData = JSON.parse(body), repos = []
      for(const repo of jsonData) {
        repos.push({
          name: repo.name,
          language: repo.language,
          color: colors[repo.language],
        })
      }
      resolve(repos)
    })
  })
}

async function getRepoDetails(repo) {
  return new Promise(resolve => {
    request.get(`${url}/repos/${user}/${repo.name}/languages`, {
      headers
    }, (err, res, body) => {
      const jsonData = JSON.parse(body), list = []
      for(const [key, value] of Object.entries(jsonData)) {
        list.push({[key]: value})
      }
      resolve(list)
    })
  })
}

async function addToRepos(repos) {
  const p = repos.map(async repo => {
    const dataList = await getRepoDetails(repo)
    console.log(`${repo.name} done`)
    Object.assign(repo, {dataList})
    return repo
  })
  await Promise.all(p)
}

(async() => {
  const userInfo = await getUserInfo()
  const repos = await getRepos()
  await addToRepos(repos)
  Object.assign(userInfo, {repos})
  fs.writeFile(path.resolve(__dirname, 'info.json'), JSON.stringify(userInfo), err => {
    console.log('write done')
  })
})()
