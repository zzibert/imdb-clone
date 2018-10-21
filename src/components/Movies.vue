<template>
  <div>
    <div class="container text-center">
        <div class=" bg-success">
            <h2>Movie Filter</h2>
            <form method="get" @submit.prevent="handleQuery">
                <div class="row d-flex justify-content-center border pt-2 pb-2">
                  <div class="pr-2">
                    <label>Filter by Title</label>
                  </div>
                  <input type="text" v-model="filter.title" />
                </div>
                <div class="row d-flex justify-content-center border pt-2 pb-2">
                  <div class="pr-2">
                    <label>Filter by Director</label>
                  </div>
                  <input type="text" v-model="filter.director" />
                </div>
                <div class="row d-flex justify-content-center border pt-2 pb-2">
                  <div class="pr-2">
                    <label>Filter by Genre</label>
                  </div>
                  <input type="text" v-model="filter.genre" />
                </div>
                <div class="row border d-flex justify-content-center">
                  <label>Filter by Year</label>
                </div>
                <div class="row border d-flex justify-content-center">
                  <label>From the year:</label>
                  <input type="range" min="1914" max="2018" v-model="filter.fromYear" />
                  {{ filter.fromYear }}
                </div>
                <div class="row border d-flex justify-content-center">
                  <label>To the year:</label>
                  <input type="range" min="1914" max="2018" v-model="filter.toYear" />
                  {{ filter.toYear }}
                </div>
                <button type="submit" class="btn btn-submit">Query</button>
            </form>
        </div>
    </div>
    <div class="text-center">
      <h2>Enter a new movie</h2>
      <form method="post" @submit.prevent="handleSubmit">
        <label>Movie title</label>
        <input type="text" v-model="body.title" required />
        <label>Movie Director</label>
        <input type="text" v-model="body.director" required />
        <label>Select Genre</label>
        <select v-model="body.genre">
          <option v-for="genre in genres" :value="genre" :key="genre">{{ genre }}</option>
        </select>
        <label>Year of Release</label>
        <input v-model="body.year" type="number" />
        <button class="btn btn-submit" type="submit">Submit</button>
      </form>
      <label>Select Sorting Option</label>
      <select @click="sortMovies" v-model="sortOption">
        <option v-for="option in sortingOptions" :value="option" :key="option">{{ option }}</option>
      </select>
      <div v-for="movie in movies" :key="movie._id" class="text-center ">
        <div class="movie-block">
          {{ movie.title }}
          {{ movie.year }}
          {{ movie.director }}
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
      sortOption: 'year',
      sortingOptions: [
        'year',
        'director',
        'title'
      ],
      movies: "",
      filter: {
        title: '',
        director: '',
        genre: '',
        fromYear: 1914,
        toYear: 2018
      },
      body: {
        title: '',
        director: '',
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
        director: this.body.director,
        genre: this.body.genre,
        year: this.body.year
      }).then(response => {
        console.log(response.data)
      }).catch(err => console.log(err))
    },
    handleQuery(){
      axios.post('http://localhost:5000/query', {
        title: this.filter.title,
        director: this.filter.director,
        genre: this.filter.genre,
        from: this.filter.fromYear,
        to: this.filter.toYear
      }).then(response => {
        this.movies = response.data
      }).catch(err => console.log(err))
    },
    sortMovies(){
      this.movies.sort((a, b) => {
        if(a[this.sortOption] < b[this.sortOption])
          return -1
        else
          return 1
      })
    }
  }
}
</script>


<style scoped>


.movie-block{
  height: 400px;
  width: 600px;
  border: 1px solid black;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 30%;
}

form{
  border: 1px solid black;
  background-color: greenyellow;
}

</style>
