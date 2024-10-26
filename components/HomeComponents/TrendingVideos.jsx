import { ActivityIndicator, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios'
import React, { PureComponent, useEffect, useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'


class MovieListItem extends PureComponent {
    render() {
        const { item, roundedRating } = this.props
        return (
            <View className='w-[250px] h-full mx-2.5 overflow-hidden flex-1'>
                <View className='h-full flex-1 relative'>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
                        resizeMode='cover'
                        className='w-full rounded-2xl h-full flex-1' />
                    <View className='absolute bottom-2 items-center justify-between w-full flex-row-reverse'>

                        <View className='rounded-full w-[30px] bg-white/30 items-center justify-center h-[30px] mr-2 '>
                            <Text className='text-center text-white font-psemibold text-sm'>{roundedRating}</Text>
                        </View>
                        <View className='rounded-full w-[30px] h-[30px] items-center justify-center ml-2 bg-white/30'>
                            <Ionicons name='arrow-down' color="#fdb94a" size={18} />
                        </View>
                    </View>
                </View>
                <View>
                    <Text
                        numberOfLines={1}
                        className='text-white font-pmedium p-1 ml-1 w-full'>{item.title}</Text>
                </View>
            </View>
        );
    }
}

const TrendingVideosII = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const apiKey = process.env.EXPO_PUBLIC_API_KEY
    const getRoundedRating = (movie) => movie.vote_average.toFixed(1)

    const handleScroll = (event) => {
        const { x } = event.nativeEvent.contentOffset;
        const itemWidth = Dimensions.get('window').width;
        const newIndex = Math.round(x / itemWidth);
        setCurrentIndex(newIndex)
    }


    useEffect(() => {
        const getTrendingMovies = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
                const fetchedMovies = response.data.results
                // console.log('data requested', fetchedMovies)
                setMovies(fetchedMovies)
                setIsLoading(false)
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
        getTrendingMovies();
    }, []);

    return (
        <>
            {error ? (<Text className='text-popred'>{error}</Text>) :
                isLoading ? (<Text className='text-white'>isLoading</Text>)
                    : (
                        <View>
                            <Text className='text-white mb-4 font-pregular text-lg'>Trending  Movies</Text>
                            <View className='min-h-[200px]'>
                                <FlatList
                                    data={movies}
                                    snapToAlignment='center'
                                    bounces={false}
                                    renderItem={({ item }) => (
                                        <MovieListItem item={item} roundedRating={getRoundedRating(item)} />
                                    )}
                                    horizontal
                                    pagingEnabled
                                    showsHorizontalScrollIndicator={false}
                                    onScroll={handleScroll}
                                    scrollEventThrottle={2}
                                    ref={flatListRef}
                                    keyExtractor={(item) => item.id}
                                />
                            </View>
                        </View>
                    )
            }
        </>
    )
}

export default TrendingVideosII
