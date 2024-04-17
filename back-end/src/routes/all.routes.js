import { Router } from 'express'
import { getAllExperiences } from '../services/experience.service.js'
import { getAllProjects } from '../services/projects.service.js'
import { getAllSkills } from '../services/skills.service.js'
import { prisma } from '../db.js'

const router = Router()

router.get('/all', async (req, res) => {
    try {
        const experiences = await getAllExperiences()
        const projects = await getAllProjects()
        const skills = await getAllSkills()
        res.json([experiences, projects, skills])
    } catch (error) {
        res.status(500).json({error: 'Cannot get all experiences --> ' + error.message})
    } finally {
        await prisma.$disconnect()
    }
})

export default router