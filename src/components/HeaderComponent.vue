<template>
	<div class="container py-4 mb-4 fixed-top">
		<div class="row align-items-start">
			<div class="col text-start">
				<router-link class="dropdown-item ms-1 text-white" :to="'/'"> 
					<img src="../assets/logo/23it-logo.png" class="img-fluid mt-2" alt="">
				</router-link>

			</div>
			<div class="col text-end">
				<div class="dropdown text-dark">
					<a class="dropdown-toggle text-decoration-none text-dark" type="" data-bs-toggle="dropdown"><span
							class="text-dark ">Menu</span>
					</a>
					<ul class="dropdown-menu align-items-start border-white row gy-1">
						<li>
							<router-link class="dropdown-item ms-1 text-white" :to="'/'"> HOME</router-link>						
						</li>
						<li>
							<router-link class="dropdown-item ms-1 text-white" :to="'/see-job'"> JOBS</router-link>						
						</li>
						
						<li><a class="dropdown-item ms-1 text-white" href="#">ABOUT US</a></li>
						<li><a class="dropdown-item ms-1 text-white" href="#">EMPLOYER</a></li>
						<li><a class="dropdown-item ms-1 text-white" href="#">CANDIDATES</a></li>
						<li>
							<router-link class="dropdown-item ms-1 text-white" :to="'/media'"> MEDIA</router-link>						
						</li>
						<li>
							<router-link class="dropdown-item ms-1 text-white" :to="'/blog'"> BLOG</router-link>						
						</li>
						<li class="d-flex gap-1">
							<a class="text-white dropdown-item ms-1" href="#">
								en
							</a>
							<a class=" text-white dropdown-item ms-1" href="#">
								nl
							</a>
						</li>

						<li class="py-3">
							<label class="switch ms-3">
								<input type="checkbox" checked>
								<span class="slider round"></span>
							</label>
						</li>

					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
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

.dropdown-toggle {

	background: #fff;
	cursor: pointer;
	border: none;
	/* color: white; */
	padding: 10px 3.5rem;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
}
.dropdown-toggle span{
	background: #fff;
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
