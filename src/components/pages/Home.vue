<template>
    <h1>Welcome to the Forum</h1>
    <category-list :categories="categories"/>
    <!--
    <div v-for="thread in threads" :key="thread.id">
        <h2>{{thread.title}}</h2>
        <div v-for="postId in thread.posts" :key="postId">
            <!- -<p>{{users.find(u => u.id === posts.find(p => p.id === postId).userId).name}}</p>
            <p>{{posts.find(p => p.id === postId).text}}</p>- ->
            <p>{{userById(postById(postId).userId).name}}</p>
            <p>{{postById(postId).text}}</p>
        </div>
    </div> -->
</template>

<script>
import sourceData from '@/data.json'
import CategoryList from '../CategoryList.vue'
export default {
    components: {
        CategoryList
    },
    data() {
        return {
            categories: sourceData.categories
        }
    }
}
</script>
<style scoped>

</style>