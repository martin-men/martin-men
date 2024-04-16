import { prisma } from '../db.js'

export const getAllSkills = async () => {
    try {
        // Get all skills
        const skills = await prisma.skills.findMany()
        return skills
    } catch (error) {
        return error
    } finally {
        await prisma.$disconnect()
    }
}