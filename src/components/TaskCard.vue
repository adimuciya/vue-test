<template>
    <div v-on:click="obj.isDel =!obj.isDel" :class="obj.isDel ? 'myClass' : ''">
        <h3>{{obj.title.toUpperCase()}} | До {{obj.date}}</h3>
        <p>{{obj.description}}</p>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "TaskCard",
        props: {
            obj: Object
        },
        methods: {
            delOnClick: function () {

            }
        }
    }
</script>

<style scoped>
    .myClass{       
        background-color: lightgrey;
    }
</style>