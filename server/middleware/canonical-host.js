// The one hostname allowed to serve the site. Everything else 301s here so
// Google sees a single canonical URL instead of four duplicates.
const CANONICAL_HOST = 'eaula.com'

// Only these hostnames get redirected. An explicit list, not a pattern, so a
// future subdomain can never be caught by accident.
const REDIRECT_FROM = new Set([
	'www.eaula.com',
	'eaulawater.com',
	'www.eaulawater.com',
])

export default defineEventHandler((event) => {
	if (import.meta.dev) return

	const headers = getRequestHeaders(event)
	const rawHost = headers['x-forwarded-host'] || headers.host
	if (!rawHost) return

	const host = rawHost.split(':')[0].toLowerCase()
	if (!REDIRECT_FROM.has(host)) return

	return sendRedirect(event, `https://${CANONICAL_HOST}${event.path}`, 301)
})
