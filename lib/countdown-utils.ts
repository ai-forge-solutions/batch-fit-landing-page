/**
 * Utility functions for countdown timers
 * Automatically resets daily at 23:59:59 Spain time (Europe/Madrid)
 */

/**
 * Get the end of current day in Spain timezone (23:59:59)
 * This ensures the countdown always resets to end at 23:59:59 of the current day
 * @returns Date object set to 23:59:59 of current day in Europe/Madrid timezone
 */
export function getTodayEndSpainTime(): Date {
  // Get current date in Spain timezone
  const now = new Date()
  const spainTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Madrid" }))
  
  // Set to end of day (23:59:59.999)
  spainTime.setHours(23, 59, 59, 999)
  
  return spainTime
}

/**
 * Check if current time has passed the daily deadline (23:59:59 Spain time)
 * @returns boolean indicating if the daily offer has expired
 */
export function isDailyOfferExpired(): boolean {
  const now = new Date()
  const endOfDay = getTodayEndSpainTime()
  return now.getTime() > endOfDay.getTime()
}