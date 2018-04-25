<template>
	<div>
		<h1 @click="toast">Picker</h1>
		<mtPicker :slots="slots" @change="onValuesChange"></mtPicker>
	</div>
</template>

<script>
	import { Toast, Picker } from 'mint-ui';
	export default{
		name:"Picker",
		data() {
			return {
				slots:[
					{
	          flex: 1,
	          values: ['闵行区', '徐汇区', '嘉定区', '浦东新区', '松江区', '宝山区'],
	          className: 'slot1',
	          textAlign: 'center',
	          defaultIndex:3,
	       },
				],
				currentValue:'2015-02',
			}
		},
		components:{
			mtPicker:Picker,
		},
		methods:{
			toast() {
				Toast("ssss")
			},
			onValuesChange(picker, values) {
				console.log(values,picker)
				//console.log(this.currentValue)
	      /*if (values[0] > values[1]) {
	        picker.setSlotValue(1, values[0]);
	      }*/
	    }
		}
	}
</script>

<style scoped>
	h1{
		width: 100%;
		text-align:center;
	}
</style>