<template>
    <h1>Welcome to the Forum</h1>
    <forum-list :forums="forums"/>
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
import ForumList from '../ForumList.vue'
export default {
    components: {
        ForumList
    },
    data() {
        return {
            forums: sourceData.forums
        }
    }
}
</script>
<style scoped>

</style>