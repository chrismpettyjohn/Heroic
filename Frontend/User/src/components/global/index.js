import Vue from 'vue'
import News from './news'
import Modal from './modal'
import Title from './title'
import Imager from './imager'
import Jumbotron from './jumbotron'
import ContentBox from './content-box'
import Loading from './notices/loading'
import HeaderSmall from './header/small'
import HeaderLarge from './header/large'
import UserMenu from './header/user-menu'
import Missing from './notices/missing'

import Navigation from './header/navigation'

// Register globally
Vue.component('HeaderSmall', HeaderSmall)
Vue.component('HeaderLarge', HeaderLarge)
Vue.component('HeroicNavigation', Navigation)
Vue.component('MissingNotice', Missing)
Vue.component('LoadingNotice', Loading)
Vue.component('ContentBox', ContentBox)
Vue.component('Jumbotron', Jumbotron)
Vue.component('UserMenu', UserMenu)
Vue.component('NewsList', News)
Vue.component('PageTitle', Title)
Vue.component('Modal', Modal)
Vue.component('Imager', Imager)
