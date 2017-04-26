import dateConvert from '../dateConvert'
import expect from 'expect'

describe('date convert function test', () => {
  it('not a string', () => {
    expect(() => {
      dateConvert(1)
    }).toThrow()
    expect(() => {
      dateConvert(null)
    }).toThrow()
  })
  it('use the default parameter', () => {
    expect(dateConvert()).toEqual('0秒前')
  })
  it('legal string', () => {
    expect(dateConvert('2017年4月1日 11:11:11')).toEqual('25天前')
    expect(dateConvert('11:11:11')).toEqual('1分钟前')
    expect(dateConvert('2011-01-01 11:11:11')).toEqual('6年前')
  })
})