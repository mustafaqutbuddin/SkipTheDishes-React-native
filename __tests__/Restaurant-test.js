import React from 'react'
import * as Api from '../src/api/restaurantApi'
import * as API_CONSTANTS from '../src/constants/ApiConstants'
import { HomeScreen } from '../src/screens'
import renderer, { act } from 'react-test-renderer'
import mockAxios from 'axios'
import RestaurantList from '../src/components/RestaurantList'

jest.useFakeTimers()

it('renders correctly', async () => {
    const tree = renderer
        .create(<HomeScreen />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})



describe("testing api", () => {
    it('should call the api and get restaurant data', done => {
        const mockedResponse = {
            "Restaurants": [{
                "Id": 77574,
                "Name": "Swift Kebab House",
                "UniqueName": "swiftkebabhouse-e2"
            }]
        }
        //setup
        mockAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({
                data: mockedResponse
            })
        })

        //work
        Api.getRestaurantsByPostCode('ec4m', (data, error) => {
            try {
                //assertions //expects
                expect(data).toEqual(mockedResponse)
                expect(mockAxios.get).toHaveBeenCalledTimes(1)
                expect(mockAxios.get).toHaveBeenCalledWith(API_CONSTANTS.GET_RESTAURANT_BY_POST_CODE + 'ec4m')
                done()
            } catch (error) {
                console.log(error)
                done(error)
            }
        })
    })
    
})

