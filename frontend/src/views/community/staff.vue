<template>
  <div>
    <!-- Page Title -->
    <page-title>Staff</page-title>

    <!-- Loading -->
    <loading v-if="loading">We are fetching our staff team</loading>

    <!-- Content -->
    <div
      v-if="!loading"
      style="margin-top:1.5%;"
      class="row">
      <article>
        <h1>Our Staff Team</h1>
        <p style="margin-top:-15px;">These amazing people help keep our running and our users safe!</p>
      </article>
      <div
        v-for="rank in ranks"
        v-if="rank.rank_type!=='hidden'"
        :key="rank.id"
        class="col-4">
        <section class="habbo-products">
          <h3 class="inventory__section__title">{{ rank.rank_name }}</h3>
          <p>{{ rank.rank_desc }}</p>
          <div
            v-for="user in rank.users"
            :key="user.id">
            <router-link
              :to="{ name : 'Home.Profile', params : { username : user.username }}"
              class="staff">
              <imager
                :look="user.look"
                query="direction=2&head_direction=2"
                class="avatar"/>
              <div class="meta">
                <h3>{{ user.username }}</h3>
                <p>{{ user.motto }}</p>
              </div>
            </router-link>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
  article {
    margin-left: 2%;
  }
</style>

<script>
import API from '@/app/api'
import Container from '@/components/utility/container'
export default {
  components: {
    'Container': Container
  },
  data () {
    return {
      loading: true,
      ranks: {
        trial: [],
        mod: [],
        admin: []
      }
    }
  },
  async mounted () {
    try {
      let ranks = await API.get('permission/staff/users')
      this.ranks = ranks.data
      this.loading = false
    } catch (e) {
      this.$router.push({ name: 'Errors.500' })
    }
  }
}
</script>
