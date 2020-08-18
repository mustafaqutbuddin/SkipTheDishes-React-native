import React, { useEffect, useState, useRef } from 'react'
import * as Api from '../api/restaurantApi'
import usePreviousValue from './usePreviousValue'


export default (postCode) => {
    const [loading, setLoading] = useState(true)
    const [restaurants, setRestaurants] = useState([])
    const [mounted, setMounted] = useState(true)
    const preValue = usePreviousValue(postCode)
    

    useEffect(() => {
        fetchApi(postCode)

        return () => { setMounted(false) }
    }, [])

    const fetchApi = async (postCode) => {
        Api.getRestaurantsByPostCode(postCode, (data, error) => {
            if (mounted) {
                setLoading(false)

                if (error) {
                    return
                }

                setRestaurants(data.Restaurants)
            }
        })
    }

    const handleOnSearch = () => {
    
        if (postCode != '' && postCode != preValue) {
            setRestaurants([])
            setLoading(true)
            fetchApi(postCode)
        }
    }

    return [loading, restaurants, handleOnSearch]
}