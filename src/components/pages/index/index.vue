<style scoped>
 @import 'index.css'
</style>
<template>
	<div id="index"  >
		<div class="head">你好中国</div>
		this is index
		<mt-button>按钮</mt-button>
	</div>
</template>

<script>

export default {
	name: 'index',
	data () {
		return {
			fullHeight: document.documentElement.clientHeight,
		}
	},
	mounted(){
		Indicator.open('Loading...')
	}


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

