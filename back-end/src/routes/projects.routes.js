import { Router } from 'express'
import { getAllProjects } from '../services/projects.service.js'
import { prisma } from '../db.js'

const router = Router()

router.get('/projects', async (req, res) => {
    try {
        const projects = await getAllProjects()
        res.json(projects)
    } catch (error) {
        res.status(500).json({error: 'Cannot get all projects --> ' + error.message})
    } finally {
        await prisma.$disconnect()
    }
})

export default router