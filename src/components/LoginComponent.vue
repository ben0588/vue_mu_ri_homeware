<template>
  <div class="container w-50 mt-5">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <div class="col-8">
        <form id="form" class="form-signin">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
              v-model="username"
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
              v-model="password"
            />
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit" @click.prevent="setLogin">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      password: '',
      user: {}
    }
  },
  methods: {
    async setLogin() {
      try {
        const api = `${import.meta.env.VITE_BASE_API_URL}/v2/admin/signin`
        const data = {
          username: this.username,
          password: this.password
        }
        const response = await axios.post(api, data)
        const { token, expired } = response.data
        document.cookie = `VueToken=${token}; expires=${new Date(expired)};`
        localStorage.setItem('expiresTime', new Date(expired))
        axios.defaults.headers.common['Authorization'] = token
        console.log('登入', response.data.success)
        if (response.data.success) {
          this.$router.push('/admin')
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted() {}
}
</script>
