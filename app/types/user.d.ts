export {};

declare global {
  interface User {
    id: number;
    name: string;
    first_name: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
  }
}
