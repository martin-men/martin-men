import { prisma } from '../db.js'

export const getAllExperiences = async () => {
    try {
        // Get all experiences
        const experience = await prisma.experience.findMany()
        return experience
    } catch (error) {
        return error
    } finally {
        await prisma.$disconnect()
    }
}