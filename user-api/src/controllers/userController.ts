import { Request, Response } from "express";
import { users, User } from "../data/users";

//GET /users?role=admin
export const getUsers = (req: Request, res: Response) => {
  //GET
  const role = req.query.role as string;

  if (!role) {
    return res
      .status(400)
      .json({ message: "Role query parameter is required" });
  }

  if (role === "all") {
    return res.status(200).json(users);
  }

  const filteredUsers = users.filter((user) => user.role === role);

  if (filteredUsers.length === 0) {
    return res
      .status(404)
      .json({ message: `No users found with role ${role}` });
  }

  return res.status(200).json(filteredUsers);
};

//POST /users
export const createUser = (req: Request, res: Response) => {
  const { name, role } = req.body;

  if (!name || !role) {
    return res.status(400).json({ message: "Name and role are required" });
  }

  const newUser: User = {
    id: users.length + 1,
    name,
    role,
  };

  users.push(newUser);
  return res.status(201).json({
    message: "User created successfully",
    user: newUser,
  });
};

//PATCH /users/:id
export const updateUser = (req: Request, res: Response) => {
  const rawId = req.params.id;
  const userId = parseInt(Array.isArray(rawId) ? rawId[0] : rawId, 10);
  const { name, role }: Partial<User> = req.body;

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (name) {
    user.name = name;
  }

  if (role) {
    user.role = role;
  }

  return res.status(200).json({
    message: "User updated successfully",
    user,
  });
};

//DELETE /users/:id
export const deleteUser = (req: Request, res: Response) => {
  const rawId = req.params.id;
  const userId = parseInt(Array.isArray(rawId) ? rawId[0] : rawId, 10);

  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(userIndex, 1);
  return res.status(200).json({ message: "User deleted successfully" });
};
