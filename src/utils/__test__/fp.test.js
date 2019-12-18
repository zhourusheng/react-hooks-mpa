import { h0 } from '../fp'

describe('test h0', () => {
  it('curreny', () => {
    const now = Date.now()
    const h00 = h0(now)
    expect(h00).toBeLessThanOrEqual(now)
  })
})