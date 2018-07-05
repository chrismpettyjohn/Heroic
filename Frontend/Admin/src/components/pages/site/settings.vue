<template>
  <div>
    <!-- Page Header -->
    <page-header title="Website Settings"></page-header>
    <!-- Page Title -->
    <page-title title="Site Settings"></page-title>
    <!-- Loading Box -->
    <loading v-if="system.loading"></loading>
    <!-- Error Box --> 
    <error v-if="system.error">{{ system.error }}</error>
    <!-- Page Content -->
    <section v-if="!system.loading && !system.error" class="no-padding-top no-padding-bottom">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8">
            <div class="block">
              <div class="title">
                <strong class="d-block">Manage Website</strong>
              </div>
              <div class="block-body">
                <form class="row">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label class="form-control-label">Name <br> <small>This is the name of your website and will show up in the title bar and other various places.</small></label> 
                      <input v-model="site.site_name" class="form-control" type="text">
                    </div>
                    <div class="form-group">
                      <label class="form-control-label">Prefix <br> <small>This is the your site's URL base with no trailing slash.  ie: http://site.com</small></label> 
                      <input v-model="site.site_link" class="form-control" type="text">
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label class="form-control-label">IP Address <br> <small>This will be the IP or proxy location of your emulation server.</small></label> 
                      <input v-model="site.server_ip" class="form-control" type="text">
                    </div>
                     <div class="form-group">
                      <label class="form-control-label">Server Port <br> <small>The port the emulation server is listening on (usually 3000)</small></label> 
                      <input v-model="site.server_port" class="form-control" type="text">
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label class="form-control-label">SWF Gamedata <br> <small>This will link to your gamedata ie: http://site.com/swfs/gamedata</small></label> 
                      <input v-model="site.swf_gamedata" class="form-control" type="text">
                    </div>
                    <div class="form-group">
                      <label class="form-control-label">Base SWFs <br> <small>This links to your base game folder ie: http://site.com/swfs/game</small></label> 
                      <input v-model="site.swf_base" class="form-control" type="text">
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <input class="btn btn-primary" type="submit" value="Update">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="statistic-block block">
              <div class="progress-details d-flex align-items-end justify-content-between">
                <div class="title"><strong>Current</strong></div>
                <div class="number dashtext-1">3.0.1a</div>
              </div>
              <p>This is the version your website is using.  Information can be viewed <a :href="`https://github.com/chrismpettyjohn/Heroic/releases/tag/3.0.1a`">here</a>.</p>
              <div class="progress-details d-flex align-items-end justify-content-between">
                <div class="title"><strong>Latest</strong></div>
                <div class="number dashtext-1">{{ github.tag_name }}</div>
              </div>
              <p>This is the latest stable release version.  It can be downloaded <a :href="github.html_url">here</a>.</p>
              <div class="progress-details d-flex align-items-end justify-content-between">
                <div class="title"><strong>More</strong></div>
              </div>
              <p>You want your website to <b>always</b> use the <b>latest</b> version to ensure you are receiving the best experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import API from '@/app/api'
  export default {
    data() {
      return {
        site : {},
        github : null,
        system : {
          loading : true,
          error : false
        }
      }
    },
    mounted: async function() {
      try {
        // Fetch site settings 
        await this.fetch_site()
        // Fetch Github release
        await this.fetch_github()
        // Return
        this.system.loading = false
      } catch (error) {
        this.system = {
          loading : false,
          error   : error
        }
      }
    },
    methods: {
      fetch_site() {
        return new Promise ((resolve, reject) => {
          API.get('settings')
            .then (site => {
              this.site = site.data[0]
              resolve()
            })
            .catch (error => {
              reject(error.response.data)
            })
        })
      },
      fetch_github() {
        return new Promise ((resolve, reject) => {
          // Remove header for now
          delete API.defaults.headers['x-access-token']
          // Fetch from GitAPI
          API.get('https://api.github.com/repos/chrismpettyjohn/Heroic/releases/latest')
            .then (stable => {
              this.github = stable.data
              resolve()
            })
            .catch (error => {
              reject(error.response.data)
            })
          // Add It Back 
          API.defaults.headers['x-access-token'] = localStorage.getItem('jwt')
        })
      }
    }
  }
</script>