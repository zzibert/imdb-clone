<template>
  <div>
    <div class="text-center">
      <h1>Welcome to my imdb clone</h1>
      <h2>Enter a new movie</h2>
      <form method="post" @submit.prevent="handleSubmit">
        <label>Movie title</label>
        <input type="text" v-model="body.title" required />
        <label>Select Genre</label>
        <select v-model="body.genre">
          <option v-for="genre in genres" :value="genre" :key="genre">{{ genre }}</option>
        </select>
        <label>Year of Release</label>
        <input v-model="body.year" type="number" />
        <button type="submit">Submit</button>
      </form>
      <div v-for="movie in movies" :key="movie.id" class="text-center">
        {{ movie.title }}
        {{ movie.genres }}
        {{ movie.year }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      movies: "",
      body: {
        title: '',
        genre: '',
        year: ''
      },
      genres: [
        'action',
        'adventure',
        'animation',
        'comedy',
        'crime',
        'disaster',
        'documentary'
      ]
    }
  },
  created(){
    axios.get('http://localhost:5000').then(response => {
      this.movies = response.data
      console.log(response.data)
    })
  },
  methods: {
    handleSubmit(){
      axios.post('/todo', {
        body: this.body
      }).then(response => {
        console.log(response)
      }).catch(err => console.log(err))
    }
  }
}
</script>


<style scoped>


</style>
