// Standalone constants to avoid circular dependency with site-content.ts
const SITE_NAME = 'AETERNUS Longevity Lab'
const SITE_EMAIL = 'sidhantmehra@aeternuslongevitylab.com'

export type TrackingConfig = {
    siteName: string
    siteIdentifier: string
    enabled: boolean
    debugMode: boolean
}

export const trackingConfig: TrackingConfig = {
    siteName: SITE_NAME,
    siteIdentifier: SITE_NAME.toLowerCase().replace(/\s+/g, '-'),
    enabled: process.env.NODE_ENV === 'production',
    debugMode: process.env.NODE_ENV === 'development',
}

export function getTrackingId(): string {
    return `${trackingConfig.siteIdentifier}-${Date.now()}`
}

export function formatTrackingLabel(section: string): string {
    return `${trackingConfig.siteName} | ${section}`
}

export const analyticsEmail = SITE_EMAIL
