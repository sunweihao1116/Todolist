<template>
	<div class="container">
		<h1 @click='goBack'>jtodo</h1>
		
	</div>
</template>

<script>
	export default{
		methods: {
			goBack() {
				//window.history.go(-1);
			}
		}
	}
</script>

<style scoped>
	.container {
      text-align: center;
  }
  h1{
      font-size :100px;
      color :rgba(175,47,47,0.4);
      font-weight :100;
      padding :20px;
  }
</style>