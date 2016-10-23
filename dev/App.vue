<template>
    <div id="container">
        <hamster-layout>
        	<!-- header start -->
        	<div slot="header" class="toolbar">
        		<button class="left-drawer-opener"><i>menu</i></button>
        	</div>
        	<!-- header end -->

            <!-- left drawer start -->
            <hamster-drawer>
                <div class="drawer-header">
                    <img :src="'statics/bg.jpg'">
                    <a class="avatar">
                        <img :src="'statics/vue.png'">
                    </a>
                </div>
            </hamster-drawer>
            <!-- left drawer end -->

        	<!-- content start -->
        	<router-view class="layout-view"></router-view>
        	<!-- content end -->

        	<!-- footer start -->
        	<div slot="footer" class="toolbar light">
        		<!-- <div class="row">
                    <div class="auto">
                        <a class="avatar">
                            <img :src="'statics/vue.png'">
                        </a>
                    </div>
                    <div class="auto">
                        <a class="avatar">
                            <img :src="'statics/vue.png'">
                        </a>
                    </div>      
                </div> -->
        	</div>
        	<!-- footer end -->
        </hamster-layout>
    </div>
</template>

<script>
	export default {
	    data() {
	        return {
	            msg: 'Hello Vue, Come Here'
	        }
	    }
	}
</script>
