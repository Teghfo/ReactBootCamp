import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Counter from './Counter'

/// jest, chai, mocka , ...  ---->  enzyme  , react library test, .... 

describe('Counter Test', () => {

    const onChange = jest.fn()

    let wrapper = mount(<Counter onChangeHandler={onChange} />)

    afterEach(() => {
        wrapper = mount(<Counter onChangeHandler={onChange} />)
    })

    it('render!', () => {
        expect(wrapper).not.toBeNull()
    })

    test('count value in p tag', () => {
        expect(wrapper.find('p').text()).toEqual('count: 0')
        expect(wrapper.find('p')).toHaveLength(1)
    })

    test('button counter increment correct', () => {
        const wrapper1 = shallow(<Counter onChangeHandler={onChange} />)
        wrapper1.find('button').simulate('click')
        wrapper1.find('button').simulate('click')
        expect(wrapper1.find('p').text()).toEqual('count: 2')
    })

    test('Mapsa Component render in Counter', () => {
        expect(wrapper.find('Mapsa')).toHaveLength(1)
    })

    test('test nomber of useEffect Call', () => {
        wrapper.find('button').simulate('click')
        expect(onChange).toBeCalledTimes(5)
    })
})