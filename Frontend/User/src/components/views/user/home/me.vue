<template>
<div>
	<page-title :title="user.username"></page-title>
	<div class="main main--fixed">
		<div class="panel first gold">
			<img src="http://habboo-a.akamaihd.net/c_images/album1584/VipParties3_Top10.gif">
			<p>{{ user.credits | currency }} Credits</p>
		</div>
		<div class="panel blue">
			<img src="http://habboo-a.akamaihd.net/c_images/album1584/GM1.gif">
			<p>{{ user.points | currency }} Diamonds</p>
		</div>
		<div class="panel black">
			<img src="http://habboo-a.akamaihd.net/c_images/album1584/ACH_VipClub12.gif">
			<p>VIP User</p>
		</div>
		<div class="panel black">
			<img src="http://habboo-a.akamaihd.net/c_images/album1584/MM010.gif">
			<p>Heroic 3.0</p>
		</div>
		<br><br>
		<news-list></news-list>
	</div>
	<content-box title="Beta Testing">
		<p>Please report any bugs or suggestions on the official <a href="https://discord.gg/y6szGk5">Discord</a></p>
	</content-box>
</div>
</template>


<script>
export default {
	data() {
		return {
			user: window.localStorage.getObject('user')
		};
	}
};
</script>
