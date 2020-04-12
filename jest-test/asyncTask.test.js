const { fetchData } = require('./asyncTask')

afterAll(() => {
    console.log('End!')
})

beforeEach(() => {
    console.log('testing')
})


test('fetch 10 user', () => {
    expect.assertions(1)
    return fetchData().then(
        data => expect(data.length).toEqual(10)
    )
})

test('test fetch first user name', () => {
    expect.assertions(1)
    return fetchData().then(
        data => expect(data[0].name).toEqual("Leanne Graham")
    )
})

test('test fetch first user name async/await', async () => {
    expect.assertions(1)
    const data = await fetchData()
    expect(data[0].name).toEqual("Leanne Graham")

})