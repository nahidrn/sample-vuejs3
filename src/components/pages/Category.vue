<template>
<h1>{{ category.name }}</h1>
    <forum-list 
        :title="category.name"
        :forums=getForumsForCategory(category)
    />
</template>

<script>
import ForumList from '../ForumList.vue'
import sourceData from '@/data.json'
export default {
    components: { ForumList },
    props: {
        id: {
            required: true,
            type: String
        }
    },
    computed: {
        category () {
            return sourceData.categories.find(category => category.id === this.id)
        }
    },
    methods: {
        getForumsForCategory (category) {
            return sourceData.forums.filter(forum => forum.categoryId === category.id)
        }
    }
    
}
</script>

<style scoped>

</style>