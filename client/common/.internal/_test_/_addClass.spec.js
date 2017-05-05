import _addClass from '../_addClass'
import expect from 'expect'

describe('add class function test', () => {
  it('empty string', () => {
    expect(_addClass('active', '')).toEqual('active')
    expect(_addClass('', '')).toEqual('')
  })

  it('normal class parameters', () => {
    expect(_addClass('', 'active')).toEqual('active')
    expect(_addClass('active', 'active')).toEqual('active')
    expect(_addClass('active menu', 'userid')).toEqual('active menu userid')
  })
})