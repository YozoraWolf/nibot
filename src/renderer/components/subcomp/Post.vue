<template>
    <div class="post-cont">
        <img :src="post.preview_file_url" alt="" class="post-img" @click="openInBrowser()">
    </div>
</template>

<script>


export default {
    name: 'Post', 
    props: ['post'],
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        openInBrowser() {
            window.electron.openPost(`${this.post.id}`);
        }
    }
};
</script>

<style lang="scss">
.post-cont {
    margin-top: 8px;

    img {
        cursor: pointer;
        transform: scale(0.9);
        
        transition: all .2s ease;
        &:hover {
            transform: scale(1);
        }
    }
}
</style>