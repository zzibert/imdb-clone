<template>
  <div class="text-center">
    <h1>Welcome to my imdb clone</h1>
    <h2>Enter a new movie</h2>
    <form action="">
      <label>Movie title</label>
      <input type="text" v-model="title" required />
      <label>Select Genre</label>
      <select v-model="genre">
        <option value="action">action</option>
        <option value="adventure">adventure</option>
        <option value="animation">animation</option>
        <option value="comedy">comedy</option>
        <option value="crime">crime</option>
        <option value="disaster">disaster</option>
        <option value="documentary">documentary</option>
      </select>
      <label>Year of Release</label>
      <input v-model="year" type="number" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      title: '',
      genre: '',
      year: ''
    }
  }
}
</script>


<style scoped>


</style>
