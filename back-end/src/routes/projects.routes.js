import { Router } from 'express'
import { getAllProjects } from '../services/projects.service.js'

const router = Router()

router.get('/projects', async (req, res) => {
    try {
        const projects = await getAllProjects()
        res.json(projects)
    } catch (error) {
        res.status(500).json({error: 'Cannot get all projects --> ' + error.message})
    }
})

export default router