import express from 'express'
import cors from 'cors'
import experienceRoutes from './routes/experience.routes.js'
import projectsRoutes from './routes/projects.routes.js'
import skillsRoutes from './routes/skills.routes.js'
import allRoutes from './routes/all.routes.js'

const app = express()
let corsOptions = {
  origin: ['http://localhost:5173']
};

// Middleware to parse JSON data
app.use(express.json())
app.use(cors(corsOptions));

// Routes
app.use('/martin-men', experienceRoutes)
app.use('/martin-men', projectsRoutes)
app.use('/martin-men', skillsRoutes)
app.use('/martin-men', allRoutes)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})