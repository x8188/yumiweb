<template>
  <div>
    <p>您的位置：{{ location }}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  methods: {
  },
  data() {
    return {
      location: '',
    }
  },
  created() {
    axios.get('http://ip-api.com/json')
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.error(error)
  })
  },
  mounted() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.location = `纬度：${position.coords.latitude}，经度：${position.coords.longitude}`
    })
  },
}
</script>

