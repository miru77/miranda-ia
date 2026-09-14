/**
 * The number lives in one place and never on screen: it goes inside the link,
 * so switching to a Business number is a one-line change and scrapers don't
 * get it served in the page text. Same rule as psiconsultorio.com.ar.
 */
const WHATSAPP = '5491132422836'
const GREETING = 'Hola Jorge, vi miranda-ia.net.ar y quiero hablar de un proyecto'

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(GREETING)}`
