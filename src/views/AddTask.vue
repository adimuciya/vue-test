<template>
	<!-- <p>Добавление задачи</p> -->
	<!-- <TaskForm></TaskForm> -->
	<!-- <task-form outside="Добавление задачи"></task-form> -->
	<task-form v-bind:outside = someString></task-form>
</template>
<script>
	import TaskForm from "@/components/TaskForm.vue";
	export default {
		name: "AddTask",
		components: {
			TaskForm
		},
		data: function () {
			return {
				someString: "Добавление задачи"
			}
		}
	}
	
</script>

<style scoped>
	
</style>