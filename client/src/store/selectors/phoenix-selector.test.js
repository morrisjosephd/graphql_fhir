import faker from 'faker'

describe('phoenix selector', () => {
  let subject

  beforeEach(() => {
    subject = require('./phoenix-selector')
  })

  test('getPhoenixDetails returns the entire phoenix state', () => {
    let fakeState = { phoenix: { name: faker.random.word() } }

    expect(subject.getPhoenixDetails(fakeState)).toEqual(fakeState.phoenix)
  })
})
