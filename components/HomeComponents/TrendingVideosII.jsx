import { ActivityIndicator, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
// import Imagemo from '../../assets/images/The_Platform.jpg'


const TrendingVideosII = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const apiKey = process.env.API_KEY
    const handleScroll = (event) => {
        const { x } = event.nativeEvent.contentOffset;
        const itemWidth = Dimensions.get('window').width;
        const newIndex = Math.round(x / itemWidth);
        setCurrentIndex(newIndex)
    }

    const renderItem = ({ item }) => {
        return (
            <View className='w-[150px] h-full mx-2.5 overflow-hidden flex-1'>
                <View className='h-full flex-1'>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
                        resizeMode='cover'
                        className='w-full rounded-2xl h-full flex-1' />
                </View>
                <Text
                    numberOfLines={1}
                    className='text-white p-1 ml-1 w-full'>{item.title}</Text>
            </View>
        )
    }


    useEffect(() => {
        const getTrendingMovies = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day',
                    {
                        params: {
                            api_key: apiKey,
                            language: 'en-US'
                        },
                        headers: {
                            Accept: 'application/json',
                        }
                    });
                // console.log(response.data.message)
                setMovies(response.data.results);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
                setIsLoading(false);

                if (error.response && error.response.status === 429) {
                    console.log('Rate limit exceeded. Retrying in 1 second...');
                    setTimeout(getTrendingMovies, 1000)
                }
            }
            getTrendingMovies();
        }
    }, []);

    return (
        <>
            {error ? (<Text className='text-popred'>{error}</Text>) :
                isLoading ? (<Text className='text-white'>isLoading</Text>)
                    : (
                        <View className='min-h-[300px]'>
                            <Text className='text-white text-lg'>TrendingVideosII</Text>
                            <FlatList
                                data={movies}
                                snapToAlignment='center'
                                bounces={false}
                                renderItem={renderItem}
                                horizontal
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                onScroll={handleScroll}
                                scrollEventThrottle={2}
                                ref={flatListRef}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    )
            }
        </>
    )
}

export default TrendingVideosII
