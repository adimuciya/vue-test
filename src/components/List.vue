<template>
    <div>
        <p v-if="tasks.length">{{info}}</p>
        <p v-else>У Вас нет текущих задач</p>
        <task-card v-for="(task, i) in tasks" v-bind:obj="task" v-bind:key="i"></task-card>
        <button v-if="tasks.length" v-on:click="deleteTasks">Удалить</button>
    </div>
</template>

<script>
    import TaskCard from "@/components/TaskCard";
    import {allTasks} from "../tmp/taskArr";
    export default {
        name: "List",
        props: {
            info: String
        },
        components: {
            TaskCard
        },
        data: function () {
            return {
                tasks: allTasks
            }
        },
        methods: {
            deleteTasks: function () {
                console.log("deleteTasks");
                for (let i = 0; i < this.tasks.length; i++){
                    if (this.tasks[i].isDel){
                        this.tasks.splice(i, 1);
                        i--;
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>