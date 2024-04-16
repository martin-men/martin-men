import express from 'express'
import experienceRoutes from './routes/experience.routes.js'
import projectsRoutes from './routes/projects.routes.js'
import skillsRoutes from './routes/skills.routes.js'

const app = express()

// Middleware to parse JSON data
app.use(express.json())

// Routes
app.use('/martin-men', experienceRoutes)
app.use('/martin-men', projectsRoutes)
app.use('/martin-men', skillsRoutes)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})