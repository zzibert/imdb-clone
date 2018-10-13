<template>
    <div>
        <movies></movies>
        <movie-filter></movie-filter>
    </div>
</template>

<script>
import Movies from './Movies.vue'
import MovieFilter from './MovieFilter.vue'
export default {
    
    components: {
        'movies': Movies,
        'movie-filter': MovieFilter
    }

}
</script>

<style>

</style>
