export interface User {
  id: number;
  name: string;
  role: string;
}

// Temporary in-memory data source (resets when server restarts).
export let users: User[] = [
  { id: 1, name: "Kwame", role: "admin" },
  { id: 2, name: "Ama", role: "vendor" },
  { id: 3, name: "Kojo", role: "customer" },
];
