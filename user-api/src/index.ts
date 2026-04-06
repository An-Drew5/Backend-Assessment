import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();
const PORT = 3000;

// Parse JSON request bodies for all routes.
app.use(express.json());

// Mount all user-related endpoints under /users.
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
