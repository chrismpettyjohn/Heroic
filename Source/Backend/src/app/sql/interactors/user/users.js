import Hash from 'bcryptjs'
import Random from 'randomstring'
import Model from '../../models/user/users'
export default class Interactor {

  // CRUD
  static async create(data) {
    try {
      // Validate
      await Interactor.validate(data.username, 'username', true)
      await Interactor.validate(data.mail, 'email', true)
      await Interactor.validate(data.password, 'password')
      data.password = Hash.hashSync(data.password, 10)
      await new Model(data).save()
      let user = await Interactor.read(data.username, 'username')
      return user

    } catch (error) {
      throw new Error(error)
    }
  }

  static async read(data, type, self) {
    if (self) {
      const user = await Model.where(type, data).fetch({
        columns: ['id', 'username', 'mail', 'look', 'rank', 'credits', 'pixels', 'points', 'online'],
        withRelated: ['bans', 'rank', 'purchases', 'purchases.product', 'purchases.product.rank']
      })
      return user.toJSON()
    } else {
      const user = await Model.where(type, data).fetch({
        columns: ['id', 'username', 'mail', 'look', 'rank', 'credits', 'pixels', 'points', 'online']
      })
      return user.toJSON()
    }
  }

  static update(data) {
    return new Model(data).save()
  }

  // Other
  static async validate(data, type, query) {
    if (data != undefined) {
      switch (type) {

        case 'username':
<<<<<<< HEAD
          if (new RegExp(`^[a-zA-Z0-9]+([-_\.][a-zA-Z0-9]+)*[a-zA-Z0-9]$`).test(data)) {
=======
          regex = new RegExp('/^(?=.{5,20}$)[A-Z0-9]+(?:[_.][A-Z0-9]+)*$/i')
          if (regex.test(data)) {
>>>>>>> parent of 5b45fbc... FIX: RegExp error on user validator
            if (query) {
              let users = await Model.where('username', data).fetchAll({
                columns: ['id']
              })
              if (users.length == 0) {
                return true
              } else {
                throw new Error('RETURN: Username is already taken')
              }
            } else {
              return true
            }
          } else {
            throw new Error('RETURN: Username is not valid')
          }
          break;

        case 'email':
          if (new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$").test(data)) {
            if (query) {
              let users = await Model.where('mail', data).fetchAll({
                columns: ['id']
              })
              if (users.length == 0) {
                return true
              } else {
                throw new Error('RETURN: Email is already taken')
              }
            } else {
              return true
            }
          } else {
            throw new Error('RETURN: Email is not valid')
          }
          break;

        case 'password':
          if (new RegExp(`^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})`).test(data)) {
            return true
          } else {
            throw new Error('RETURN: Password is not strong enough')
          }
          break;


      }
    } else {
      throw new Error(`RETURN: ${type} is empty`)
    }
  }

  static async login(username, password) {
    if (username != undefined && password != undefined) {
      try {
        let user = await Interactor.validate(username, 'username', false)
        user = await Model.where('username', username).fetch({
          columns: ['id', 'password']
        })
        if (user) {
          if (Hash.compareSync(password, user.toJSON().password)) {
            return user.toJSON().id
          } else {
            throw new Error(`RETURN: That's not the right password`)
          }
        } else {
          throw new Error('RETURN: That user does not exist')
        }
      } catch (error) {
        throw new Error(error)
      }
    } else {
      throw new Error('RETURN: You need to fill in both username and password.')
    }
  }

  static async fetch(data, type) {
    try {
      return await Model.where(data, type).fetch({
        columns: ['id', 'username', 'rank', 'look', 'credits', 'pixels']
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  static async count(data, type) {
    try {
      return await Model.where(data, type).count()
    } catch (error) {
      throw new Error(error)
    }
  }

  static async exists(data, type) {
    try {
      let user = await Model.where(type, data).fetch({
        columns: ['id', type]
      })
      if (user) {
        return user.toJSON().id
      } else {
        throw new Error('RETURN: User does not exist')
      }
    } catch (error) {
      throw new Error(error)
    }

  }

  static async subscription(data) {
    try {
      // Check For Existence
      await Interactor.exists(data.id, 'id')
      // Fetch user
      let user = await Interactor.read(data.id, 'id', true)
      // Format
      user = user.toJSON()
      // Check Rank
      if (user.rank.id > data.rank) {
        data.rank = user.rank.id
      }
      // Save
      await Interactor.update({
        id: data.id,
        rank: data.rank,
        credits: user.credits + data.credits,
        pixels: user.credits + data.pixels,
        points: user.points + data.points
      })
      return 'Account has been updated'
    } catch (error) {
      throw new Error(error)
    }
  }

  static async client(id) {
    try {

      const generated = `heroic_two_${Random.generate(7)}`

      await Interactor.exists(id, 'id')

      await Model.where('id', id).save({
        id: id,
        auth_ticket: generated
      }, {
        method: 'update'
      })

      return generated

    } catch (error) {
      throw new Error(error)
    }
  }

}