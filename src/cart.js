// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options = {}) {
  if (items == null || (Array.isArray(items) && items.length === 0)) {
    return 0
  }
  if (!Array.isArray(items)) {
    throw new TypeError('items must be an array')
  }

  const vatRate = options.vatRate ?? 0
  const freeShipFrom = options.freeShipFrom ?? Infinity
  const shipFee = options.shipFee ?? 0

  let subtotal = 0
  for (const item of items) {
    if (item == null || typeof item !== 'object') {
      throw new TypeError('each item must be an object')
    }
    const { price, qty } = item
    if (typeof price !== 'number' || !Number.isFinite(price) || price < 0) {
      throw new RangeError('Invalid price or quantity')
    }
    if (!Number.isInteger(qty) || qty < 1) {
      throw new RangeError('Invalid price or quantity')
    }
    subtotal += price * qty
  }

  const vat = subtotal * vatRate
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee
  return Math.round(subtotal + vat + shipping)
}
