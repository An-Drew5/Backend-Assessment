export interface User {
  id: number;
  name: string;
  role: string;
}

export let users: User[] = [
    { id: 1, name: "Kwame", role: "admin"},
    { id: 2, name: "Ama", role: "vendor"},
    { id: 3, name: "Kojo", role: "customer"},
]