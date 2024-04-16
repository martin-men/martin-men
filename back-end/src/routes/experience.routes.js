import { Router } from 'express'
import { getAllExperiences } from '../services/experience.service.js'

const router = Router()

router.get('/experiences', async (req, res) => {
    try {
        const experiences = await getAllExperiences()
        res.json(experiences)
    } catch (error) {
        res.status(500).json({error: 'Cannot get all experiences --> ' + error.message})
    }
})

export default router
