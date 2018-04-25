<template>
	<div id="app">
		<Header/>
		<router-view></router-view>
		<Footer/>
	</div>
</template>

<script>
	import Header from './components/Header';
	import Footer from './components/Footer';
	export default {
		name: 'App',
		data() {
			return {
				
			}
		},
		components:{
			Header,
			Footer,
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.4);
	}
	
</style>