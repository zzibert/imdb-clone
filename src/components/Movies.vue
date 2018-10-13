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
        <button class="btn btn-submit" type="submit">Submit</button>
      </form>
      <div v-for="movie in movies" :key="movie.id" class="text-center">
        <div class="d-block">
          {{ movie.title }}
          {{ movie.year }}
        </div>
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
        'documentary',
        'science fiction',
        'history',
        'drama'
      ]
    }
  },
  created(){
    axios.get('http://localhost:5000').then(response => {
      this.movies = response.data
    }).catch(err => console.log(err))
  },
  methods: {
    handleSubmit(){
      axios.post('http://localhost:5000/add', {
        title: this.body.title,
        genre: this.body.genre,
        year: this.body.year
      }).then(response => {
        console.log(response.data)
      }).catch(err => console.log(err))
    }
  }
}
</script>


<style scoped>


</style>
