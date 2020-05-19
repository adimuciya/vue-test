<template>
	<div>
		<!-- то куда встраиваются данные извне -->
		<p>{{outside}}</p>

		<form @submit.prevent="addTask">
			<!-- Через v-model мы связываем объект данных и форму -->
			<!--veevalidate валидация для вью	-->
			<v-text-field
					single-line
					label="Название статьи"
					name="title"
					required
					v-model.trim="title"
					:rules="titleRules"
			></v-text-field>
<!--			<input type="text" name="title" v-model.trim="title">-->
			<input type="datetime-local" name="date" v-model="date">
			<v-textarea
					outlined
					label="Описание задачи"
					name="description"
					required
					v-model.trim="description"
					:rules="descriptionRules"
					hide-details="auto"
			></v-textarea>
<!--			<textarea name="description" v-model.trim="description"></textarea>-->
<!--			<input type="submit" value="Добавить">-->
			<v-btn class="mt-5 " color="primary" type="submit">Добавить</v-btn>
		</form>
	</div>
</template>
<script>
	// import {allTasks} from "../tmp/taskArr";
	import {allTasks} from "../tmp/taskArr";

	export default{
		name: "TaskForm",
		// то что готов принять компонент
		props: {
			outside: String
		},

		data: function () {
			return {
				title: "",
				date: "",
				description: "",
				tasks: allTasks,
				titleRules:[
					v => v.length >= 2 || "От 2 символов",
					v => v.length <= 40 || "До 40 символов"
				],
				descriptionRules:[
					v => v.length >= 20 || "От 20 символов"
				]
			}
		},

		methods: {
			addTask: function () {
				// console.log(`Добавление задачи`, allTasks);
				console.log(this.title, this.date, this.description);
				this.tasks.push({
					title: this.title,
					date: this.date,
					description: this.description,
					isDel: false
				})
			}
		}
	}
</script>

<style scoped>
	
</style>