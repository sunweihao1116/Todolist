<template>
	<div id="footer">
      <span>written by {{this.author}}</span>
  </div>
</template>

<script>
	export default{
		data() {
			return {
				author : 'temple',
			}
		}
	}
</script>

<style scoped>
	#footer{
	 	margin-top :40px;
    text-align :center;
    color :#bfbfbf;
    font-size :20px;
    text-shadow :0px 1px 0px 1px;
	}
</style>