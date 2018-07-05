<template>
	<div>
		<page-title title="Staff Team"></page-title>

		<!-- Notices -->
		<loading-notice v-if="loading">Fetching our most charming staff team</loading-notice>

		<!-- Content -->
		<div v-if="!loading">
			<!-- Header -->
			<header class="news-category__header">
				<span>Show me staff members ranked:</span>
				<nav class="news-category__navigation">
					<ul class="news-category__list">
						<li class="news-category__item">
							<a @click="active=false" :class="{'news-category__link--active': !active}" class="news-category__link">All</a>
							<a v-for="rank in ranks" @click="setActive(rank.id)" :class="{'news-category__link--active': active.id==rank.id}" class="news-category__link">{{ rank.rank_name }}</a>
						</li>
					</ul>
				</nav>
			</header>
			<!-- All members -->
			<section v-if="!active" v-for="user in users" class="wrapper wrapper--content rooms-wrapper" style="float:left;">
				<div>
						<article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>
						<article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>
						<article class="news-header news-header--column">
								<router-link :to="{ name : 'user.home.profile', params : { username : user.username }}" class="news-header__link news-header__banner">
										<figure class="news-header__viewport" style="border-radius:50%">
												<img src="/img/staff.png" class="news-header__image news-header__image--thumbnail" style="opacity:.5;">
												<div class="staff_avatar" :style="`background: url(https://avatar-retro.com/habbo-imaging/avatarimage?figure=${user.look}&amp;direction=2&amp;head_direction=3&amp;gesture=sml&amp;size=l);height: 124px;width: 110px;top: 0px;z-index: 9000;position: absolute;background-position: -8px -17px;`"></div>
										</figure>
								</router-link>
								<router-link :to="{ name : 'user.home.profile', params : { username : user.username }}" class="news-header__link news-header__wrapper">
										<h2 class="news-header__title">{{ user.username }}</h2>
										<img v-if="user.online==1" src="/img/online.gif">
										<img v-if="user.online==0" src="/img/offline.gif">
								</router-link>
						</article>
					</div>
			</section>
		<!-- Individual Rank -->
		<section v-if="active" class="wrapper wrapper--content rooms-wrapper" style="float:left;">
			<div v-if="active.users.length==0">
				<h3>Hmmm</h3>
				<p>It looks like you found an empty staff group.  Perhaps they'll be hiring soon!</p>
			</div>
			<div v-if="active.users.length > 0" v-for="user in active.users">
					<article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>
					<article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>
					<article class="news-header news-header--column">
							<router-link :to="{ name : 'user.home.profile', params : { username : user.username }}" class="news-header__link news-header__banner">
									<figure class="news-header__viewport" style="border-radius:50%">
											<img src="/img/staff.png" class="news-header__image news-header__image--thumbnail" style="opacity:.5;">
											<div class="staff_avatar" :style="`background: url(https://avatar-retro.com/habbo-imaging/avatarimage?figure=${user.look}&amp;direction=2&amp;head_direction=3&amp;gesture=sml&amp;size=l);height: 124px;width: 110px;top: 0px;z-index: 9000;position: absolute;background-position: -8px -17px;`"></div>
									</figure>
							</router-link>
							<router-link :to="{ name : 'user.home.profile', params : { username : user.username }}" class="news-header__link news-header__wrapper">
									<h2 class="news-header__title">{{ user.username }}</h2>
									<img v-if="user.online==1" src="/img/online.gif">
									<img v-if="user.online==0" src="/img/offline.gif">
							</router-link>
					</article>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import HTTP from '@/app/utilities/http'
export default {
  data() {
    return {
      ranks: [],
      active: false,
      loading: true,
      users: []
    };
  },
  methods: {
    setActive(id) {
      this.ranks.forEach(rank => {
        if (rank.id == id) {
          this.active = rank;
        }
      });
    }
  },
  mounted() {
    HTTP.get("permission/type/staff").then(ranks => {
      // Set Ranks
      this.ranks = ranks.data;
      // Push Users Into All
      this.ranks.forEach(rank => {
        rank.users.forEach(user => {
          this.users.push(user);
        });
      });
      this.loading = false;
    });
  }
};
</script>
