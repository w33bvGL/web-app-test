export function getTelegramUser() {
  if (typeof window !== 'undefined') {
    return window.Telegram?.WebApp?.initDataUnsafe?.user || null;
  }
  return null;
}
