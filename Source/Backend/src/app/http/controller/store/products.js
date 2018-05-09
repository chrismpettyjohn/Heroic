import Error from '../../../lib/error'
import Database from '../../../sql/interactors/store/products'
export default class Controller {

    static async create(request, reply) {
        try {
            const data = {
                title: request.body.title,
                content: request.body.content,
                price: request.body.price,
                rank_id: request.body.rank_id,
                boost_credits: request.body.boost_credits,
                boost_pixels: request.body.boost_pixels,
                boost_points: request.body.boost_points
            } 
            await Database.create(data)
            reply.code(200).send('Your changes have been saved')
        } catch (error) {
            new Error(error, request, reply)
        }
    }

    static async read(request, reply) {
        try {
            let products = await Database.read(request.params.id)
            reply.code(200).send(products)
        } catch (error) {
            new Error(error, request, reply)
        }
    }

    static async update(request, reply) {
        try {
            const data = {
                id: request.params.id,
                title: request.body.title,
                content: request.body.content,
                price: request.body.price,
                rank_id: request.body.rank_id,
                boost_credits: request.body.boost_credits,
                boost_pixels: request.body.boost_pixels,
                boost_points: request.body.boost_points
            } 
            await Database.update(data)
            reply.code(200).send('Your changes have been saved')
        } catch (error) {
            new Error(error, request, reply)
        }
    }

    static async delete(request, reply) {
        try {
            await Database.delete(request.params.id)
            reply.code(200).send('Package has been deleted')
        } catch (error) {
            new Error(error, request, reply)
        }
    }

}