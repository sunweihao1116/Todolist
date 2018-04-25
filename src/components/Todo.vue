<template>
	<div class="container">
		<input
		type="text"
    class="add-input"
    autofocus="autofocus"
    placeholder="接下来做什么"
    @keyup.enter="addTodo"
    >
    <Item
    :todo="todo"
    v-for="todo in filteredTodos"
    :key="todo.id"
    @del="deleteTodo"
    />
    <Tabs
    :filter="filter"
    :todos="todos"
    @clearAll="clearAllComplated"
    @toggle="toggleFilter"
    />
	</div>
</template>

<script>
	import Item from './Item';
	import Tabs from './Tabs';
	let id =0;
	export default{
		name:"Todo",
		data() {
			return {
				todos:[],
        filter:"all"
			}
		},
		components: {
			Item,
			Tabs,
		},
		computed:{
			filteredTodos(){
				if(this.filter === 'all'){
					return this.todos
				}
				const completed = this.filter === 'completed'
				return this.todos.filter( todo => todo.completed === completed )
			}
		},
		methods:{
			addTodo(e){
				if(e.target.value == ""){
					alert ("您还没有输入内容");
				}else{
					this.todos.unshift({
						id: id++,
						content : e.target.value,
						completed :false,
					});
					e.target.value = '';
				}
				
			},
			deleteTodo(id){
				/*findIndex----取第一个符合条件的下标*/
				this.todos.splice( this.todos.findIndex( todo => todo.id === id ) , 1 );
			},
			clearAllComplated(){
				/*留下未完成的*/
				this.todos = this.todos.filter( todo => !todo.completed) ;
			},
			toggleFilter(state){
				this.filter = state;
			},
		}
	}
</script>

<style scoped>
	.container{
    width :600px;
    margin :0px  auto;
    box-shadow :0px 0px 5px #666;
	}
	.add-input{
	    positon:relative;
	    margin: 0px;
	    width :100%;
	    font-size: 24px;
	    font-family:  inherit ;
	    font-weight:inherit;
	    line-height: 1.4rem;
	    border: 0;
	    outline: none ;
	    color: inherit;
	    padding: 6px;
	    border: 1px solid #999;
	    box-shadow: inset 0 -1px 5px 0px rgba(0,0,0,0);
	    box-sizing: border-box;
	    font-smoothing:antialiased;
	    padding: 16px 16px 16px 60px;
	    border: none  ;
	}
</style>