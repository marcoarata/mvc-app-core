import express from 'express'

// Importación de Controladores


const router = express.Router()

router.get('/', (req, res) => {

    res.render('pages/home/homepage')

})

export default router