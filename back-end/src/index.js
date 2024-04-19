import express from "express";
import cors from "cors";
import experienceRoutes from "./routes/experience.routes.js";
import projectsRoutes from "./routes/projects.routes.js";
import skillsRoutes from "./routes/skills.routes.js";
import allRoutes from "./routes/all.routes.js";

let corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://martin-men-y12i.vercel.app",
    "https://martin-men-y12i-9k1m2a7yp-martin-mens-projects.vercel.app",
    "https://martin-mjmsv3xi5-martin-mens-projects.vercel.app"
  ],
};

const app = express();
app.use(cors(corsOptions));

// Middleware to parse JSON data
app.use(express.json());

// Routes
app.use("/martin-men", experienceRoutes);
app.use("/martin-men", projectsRoutes);
app.use("/martin-men", skillsRoutes);
app.use("/martin-men", allRoutes);
app.get("/", (req, res) => {
  res.send("Listening");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

export default app;
