import { Router } from 'express'
import { getAllSkills } from '../services/skills.service.js'

const router = Router()

router.get('/skills', async (req, res) => {
    try {
        const skills = await getAllSkills()
        res.json(skills)
    } catch (error) {
        res.status(500).json({error: 'Cannot get all projects --> ' + error.message})
    }
})

export default router