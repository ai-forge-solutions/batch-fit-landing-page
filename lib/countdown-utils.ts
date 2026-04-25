/**
 * Utility functions for countdown timers
 * Automatically resets daily to create evergreen urgency
 */

/**
 * Get the end of current day in Spain timezone that resets every day
 * This ensures ALL users worldwide see the same countdown based on Spain time
 * creating consistent urgency regardless of user's location
 * @returns Date object set to 23:59:59 of current day in Spain timezone
 */
export function getTodayEndSpainTime(): Date {
  // Get current time in Spain (Europe/Madrid timezone)
  const now = new Date()
  const spainTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Madrid" }))
  
  // Create end of day in Spain timezone
  const endOfSpainDay = new Date(spainTime)
  endOfSpainDay.setHours(23, 59, 59, 999)
  
  // If Spain day has already ended, move to next day
  const currentSpainTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Madrid" }))
  if (currentSpainTime > endOfSpainDay) {
    endOfSpainDay.setDate(endOfSpainDay.getDate() + 1)
  }
  
  // Convert back to user's timezone while maintaining Spain-based timing
  const spainOffset = getSpainTimezoneOffset()
  const userOffset = now.getTimezoneOffset() * 60000
  
  // Calculate the actual target time in user's timezone
  const targetTime = new Date(endOfSpainDay.getTime() - spainOffset + userOffset)
  
  return targetTime
}

/**
 * Get Spain timezone offset in milliseconds
 * Accounts for daylight saving time automatically
 */
function getSpainTimezoneOffset(): number {
  const now = new Date()
  const spainTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Madrid" }))
  const utcTime = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }))
  return spainTime.getTime() - utcTime.getTime()
}

/**
 * Check if current time has passed the daily deadline
 * This will always be false since we reset daily
 * @returns boolean indicating if the daily offer has expired
 */
export function isDailyOfferExpired(): boolean {
  return false // Always show as active since it resets daily
}

/**
 * Get a date that represents "end of day" in Spain timezone with a daily reset
 * This creates an evergreen timer based on Spain time that shows consistent urgency worldwide
 * @returns Date object that resets every day at midnight Spain time
 */
export function getEvergreenCountdownTarget(): Date {
  return getTodayEndSpainTime()
}