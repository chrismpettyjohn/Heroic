<template>
  <div>
    <!-- Title -->
    <page-title>Home</page-title>

    <!-- Social Area -->
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col-2">
            <div class="user"/>
          </div>
          <div class="col-10 col-closer">
            <container>
              <h4>
                <div class="row">
                  <div class="col-10 col-closer">
                    Post as {{ user.username }} <i class="fa fa-caret-down"/>
                  </div>
                  <div
                    class="col-2"
                    style="padding-left:35px;">
                    Publish
                  </div>
                </div>
              </h4>
              <form class="post">
                <textarea
                  placeholder="Write a new post..."
                  rows="3"/>
              </form>
            </container>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .user {
    background: #0B3E63;
    border-radius: 3px;
    text-align: center;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.3);
    height: 70px;
    width: 66px;
    background-image: url(https://www.habbo.com/habbo-imaging/avatarimage?figure=sh-3252-64-67.ch-215-1408.hd-3103-1.ca-3217-110-1325.hr-125-61.lg-3023-110);
    margin: 0 auto;
  }
  .col-closer {
    margin-left: -5px;
  }
  .post textarea {
    display: block;
    background: none;
    border: none;
    width: 100%;
    color: #7ecaee;
    border: none;
    resize: none;
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #7ecaee;
    opacity: 0.6;
  }
</style>

<script>
import Session from '@/app/storage/session'
import Container from '@/components/utility/container'
export default {
  components: {
    'Container': Container
  },
  data () {
    return {
      user: Session.state.user
    }
  }
}
</script>
