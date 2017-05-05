import _removeClass from '../_removeClass'
import expect from 'expect'

describe('remove class function test', () => {
  it('border situation', () => {
    expect(_removeClass('', 'active')).toEqual('')
    expect(_removeClass('', '')).toEqual('')
    expect(_removeClass('active', '')).toEqual('active')
  })

  it('normal class parameters', () => {
    expect(_removeClass('active normal', 'active')).toEqual('normal')
    expect(_removeClass('active className normal', 'active')).toEqual('className normal')
  })
})