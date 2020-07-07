import React from 'react';
import { shallow } from 'enzyme'

import CounterApp from '../CounterApp';

/*
* Testing using enzyme + jest
* This testing uses snapshots. Be care reloading snapshots 
*/

describe('Testing <CounterApp /> App Component', () => {
    
    let wrapper = shallow( <CounterApp /> ); // initialization for code recomendation (vscode)
    // initialization before each test
    beforeEach( () =>  {
        wrapper = shallow( <CounterApp /> );
    });

    test('Load <CounterApp /> correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Show default value correctly', () => {
        const default_value = 50;
        const wrapper = shallow( <CounterApp value={ default_value } /> );
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe(`${default_value}`);
    })

    test('Increase value by 1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');
    })

    test('Decrease value by 1', () => {
        // using beforeEach to setup the test (without re-initialization, it would return 10)
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('9');
    });


    test('reset default_value', () => {
        const default_value = 50;
        const wrapper = shallow( <CounterApp value={ default_value } /> );
        // Upload value
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        // Reset
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe(`${default_value}`);
    })
})
