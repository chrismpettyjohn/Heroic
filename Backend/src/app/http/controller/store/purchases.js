import Error from '../../../lib/error'
import Users from '../../../sql/interactors/user/users'
import Purchases from '../../../sql/interactors/store/purchases'
export default class Controller {

    static async create(request, reply) {
        try {
            // Purchase Record 
            await Purchases.create({
                user_id: request.body.user.id,
                product_id: request.body.product.id,
                payment_id: request.body.purchase.id,
                status: 'accepted',
                verified_at: new Date()
            })
            // Update Account  
            await Users.subscription({
                id: request.body.user.id,
                rank: request.body.product.rank_id,
                credits: request.body.product.boost_credits,
                pixels: request.body.product.boost_pixels,
                points: request.body.product.boost_points
            })
            reply.code(200).send('Your membership has been updated')
        } catch (error) {
            new Error(error, request, reply)
        }
    }


}