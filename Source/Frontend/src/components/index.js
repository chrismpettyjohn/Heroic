import Frontend from './frontend/index'

let app = angular.module('heroic.components', [])

app.component('habboHeaderLarge', Frontend.Header.Large)
app.component('habboHeaderSmall', Frontend.Header.Small)
app.component('habboNavigation', Frontend.Header.Navigation.Parent)
app.component('habboUserMenu', Frontend.Header.User.Menu)
app.component('habboTabs', Frontend.Header.Navigation.Tabs)
app.component('articleList', Frontend.News.List)
app.component('habboProductThumbnail', Frontend.Store.Product.Thumbnail)
app.component('paymentButton', Frontend.Store.Payment.Button)
app.component('habboFooter', Frontend.Footer)
export default app
  