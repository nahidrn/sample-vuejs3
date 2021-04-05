<template>
    <div class="col-full">
        <form v-on:submit.prevent="save">
            <div class="form-group">
                <label for="thread_title">Title:</label>
                <input type="text" id="thread_title" class="form-input" name="title" >
            </div>

            <div class="form-group">
                <label for="thread_content">Content:</label>
                <!-- <textarea :value="newPostText" v-on:input="newPostText = $event.target.value" id="thread_content" class="form-input" name="content" rows="8" cols="140"></textarea> -->
                <textarea v-model="text" id="thread_content" class="form-input" name="content" rows="8" cols="140"></textarea>
            </div>

            <div class="btn-group">
                <button class="btn btn-ghost">Cancel</button>
                <button class="btn btn-blue" type="submit" name="Publish">Publish </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: ''
        }
    },
    methods: {
        save () {
            const postId = 'asdf' + Math.random()
            const post = {
                id: postId,
                text: this.text,
                publishedAt: Math.floor (Date.now() / 1000),
                userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
            }

            //vue custom event to communicate with parent component
            this.$emit('save', { post }) // access under eventData.post

            this.text = ''
        }
    }
}
</script>

<style scoped>

</style>