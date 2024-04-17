import { prisma } from '../db.js'

export const getAllProjects = async () => {
    try {
        // Get all projects
        const projects = await prisma.projects.findMany({
            include: {
                projectimages: true
            }
        })
        return projects
    } catch (error) {
        return error
    }
}
