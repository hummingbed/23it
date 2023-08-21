<template>
	<div class="container py-3 mb-4 fixed-top">
		<div class="row align-items-start">
			<div class="col text-start">
				<router-link class="dropdown-item ms-1 text-white" :to="'/'">
					<img src="../assets/logo/23it-transparent.png" class="img-fluid mt-2 " style="width: 70px;" alt="">
				</router-link>

			</div>
			<!-- <div class="col text-end">
				<div class=" text-dark">
					<a class="dropdown-toggl py-2 px-3 text-decoration-none text-dark" type=""
						data-bs-toggle="dropdown"><span class="text-dark fw-bold">MENU
							<img src="../assets/arrow/drop-down.png" class="ps-5 pe-3" alt="">
						</span>
					</a>
					<ul class="dropdown-menu align-items-start border-white row gy-1">
						<li>
							<router-link class="dropdown-item ms-1 text-white fw-bold" :to="'/'"> HOME</router-link>
						</li>
						
						
						<li>
							<router-link class="dropdown-item ms-1 text-white fw-bold" :to="'/media'">
								MEDIA</router-link>
						</li>
						<li>
							<router-link class="dropdown-item ms-1 text-white fw-bold" :to="'/blog'"> BLOG</router-link>
						</li>
					</ul>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderComponent',
	data() {
		return {

			path: window.location.origin

		}
	},
	mounted(){
		console.log(window.location.origin);
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
	background-color: #070223;
}

ul li a {
	cursor: pointer;
	display: inline-block;
	position: relative;
	transition: 0.5s;
}

ul li a:after {
	content: '\00bb';
	position: absolute;
	opacity: 0;
	top: 0;
	right: -20px;
	transition: 0.5s;
}

ul li a span:after {
	opacity: 1;
	right: 0;
}

.dropdown-menu {
	border: 3px solid #fff;
	background-color: #070223;
}

.dropdown-toggl {

	background: #F0E4D9;
	cursor: pointer;
	border: none;
	/* color: white; */
	/* padding: 10px 3.5rem; */
	/* padding-right: 7rem; */
	/* padding-top: 7px;
	padding-bottom: 7px; */

	text-decoration: none;
	display: inline-block;
	font-size: 16px;
}


.switch {
	position: relative;
	display: inline-block;
	width: 26px;
	height: 50px;

}

.switch input {
	opacity: 0;
	width: 0;
	height: 0;

}

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border: 1px #fff solid;
	-webkit-transition: .4s;
	transition: .4s;
}

.slider:before {
	position: absolute;
	content: "";
	height: 20px;
	width: 20px;
	left: 2.5px;

	background-color: #F0E4D9;
	-webkit-transition: .4s;
	transition: .4s;
}

input:focus+.slider {
	box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
	-webkit-transform: translateY(26px);
	-ms-transform: translateY(26px);
	transform: translateY(26px);
}

.slider.round {
	border-radius: 34px;
}

.slider.round:before {
	border-radius: 50%;
}
</style>
