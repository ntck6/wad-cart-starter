import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('waives shipping fee when subtotal meets or exceeds freeShipFrom threshold', () => {
  const items = [
    { name: 'Giày', price: 500000, qty: 1 }
  ]
  const options = { vatRate: 0.1, freeShipFrom: 500000, shipFee: 30000 }
  // Tiền hàng: 500,000. VAT: 50,000. Phí ship: 0 (vì 500,000 >= 500,000). Tổng: 550,000.
  assert.equal(cartTotal(items, options), 550000)
})

test('returns 0 for an empty cart or null items', () => {
  const options = { vatRate: 0.1, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal([], options), 0)
  assert.equal(cartTotal(null, options), 0)
})

test('throws RangeError for invalid price or quantity', () => {
  const options = { vatRate: 0.1, freeShipFrom: 500000, shipFee: 30000 }
  
  assert.throws(() => {
    cartTotal([{ name: 'Lỗi giá', price: -50000, qty: 1 }], options)
  }, RangeError)

  assert.throws(() => {
    cartTotal([{ name: 'Lỗi số lượng', price: 50000, qty: 0 }], options)
  }, RangeError)
  
  assert.throws(() => {
    cartTotal([{ name: 'Lỗi số lượng chữ', price: 50000, qty: "2" }], options)
  }, RangeError)
})

test('throws TypeError if items is not an array or item is not an object', () => {
  assert.throws(() => cartTotal("not an array"), TypeError)
  assert.throws(() => cartTotal([ "not an object" ]), TypeError)
})

test('works perfectly even if options argument is completely omitted', () => {
  // Chỉ truyền items, bỏ trống tham số options
  const items = [{ name: 'Sổ tay', price: 45000, qty: 1 }]
  assert.equal(cartTotal(items), 45000) 
})