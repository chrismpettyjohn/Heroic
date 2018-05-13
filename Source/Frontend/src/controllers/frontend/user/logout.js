export default class Controller
{

  constructor(SessionService)
  {
      'ngInject'
      this.$onInit            = (() => {
        SessionService.delete()
      })
  }

}
