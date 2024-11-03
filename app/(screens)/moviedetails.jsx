import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import axios from 'axios'

const MovieDetails = () => {
    const movieData = useLocalSearchParams()
    const movieId = movieData.movieId;
    const apiToken = process.env.EXPO_PUBLIC_API_TOKEN;
    const [isLoading, setIsLoading] = useState(true)
    const [movieDetails, setMovieDetails] = useState([])

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                params: {
                    language: 'en-US',
                },
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${apiToken}`
                }
            })
            // console.log(response.data);
            setMovieDetails(response.data);
            console.log('The Movie Details:', movieDetails);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(true)
            if (error.response && error.response.status === 401) {
                console.error('Invalid API key or authentication error');
                setError('Invalid API key or authentication error')
            } else {
                console.error('Error fetching data:', error)
                setError('Error fetching data:', error)
            }
            setError(error.message);
            setIsLoading(false)
        }

    }
    return (
        <View className='h-full w-full bg-primary-200 justify-center items-center'>
            <Text className='text-white'>MOVIE DETAILS</Text>
            <Text className='text-white'>{movieDetails.original_title}</Text>
        </View>
    )
}

export default MovieDetails

const styles = StyleSheet.create({})