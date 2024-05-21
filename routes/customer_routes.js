import express from 'express'

import {
    index_customer,
    show_customer,
    new_customer,
    edit_customer,
    create_customer,
    update_customer,
    delete_customer,

} from '../controllers/customer_controllers.js'


const router = express.Router()


router.get('/', index_customer)
router.get('/:id/show', show_customer)
router.get('/new', new_customer)
router.get('/:id/edit', edit_customer)

router.post('/', create_customer)

router.put('/:id', update_customer)
router.delete('/:id/delete', delete_customer)


export default router