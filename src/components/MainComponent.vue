<template>
    <div>
        <h1 class="text-center">Welcome to my imdb clone</h1>
        <movies></movies>
    </div>
</template>

<script>
import Movies from './Movies.vue'
export default {
    
    components: {
        'movies': Movies
    }

}
</script>

<style>

</style>
