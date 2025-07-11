import { blink } from '../blink/client'

// Admin emails that have access to admin features
const ADMIN_EMAILS = ["devinniaura@gmail.com"];

export function isAdmin(userEmail?: string | null): boolean {
  if (!userEmail) return false;
  return ADMIN_EMAILS.includes(userEmail);
}

export async function getUser() {
  try {
    return await blink.auth.me();
  } catch {
    return null;
  }
}

export function signIn() {
  return blink.auth.login();
}

export function signOut() {
  return blink.auth.logout();
}

export function isUserAdmin(user: { email?: string } | null): boolean {
  return user && user.email && isAdmin(user.email);
}