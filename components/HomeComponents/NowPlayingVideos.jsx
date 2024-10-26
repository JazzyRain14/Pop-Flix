import { ActivityIndicator, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Carousel from 'react-native-reanimated-carousel'
import axios from 'axios'
import { PureComponent } from 'react'


const TrendingVideos = () => {
    const [isLoading, setIsLoading] = useState(true);
    // const [isLoadingMore, setIsLoadingMore] = useState(true);
    const [movies, setMovies] = useState([])
    const [currentPageMovies, setCurrentPageMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(null);

    const apiKey = process.env.EXPO_PUBLIC_API_KEY;
    const apiToken = process.env.EXPO_PUBLIC_API_TOKEN;

    const getRoundedRating = (movie) => movie.vote_average.toFixed(1)

    class MovieListItem extends PureComponent {
        render() {
            const { item, roundedRating } = this.props
            return (
                <View className='w-[150px] h-full mx-2.5 overflow-hidden flex-1'>
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

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing`, {
                params: {
                    language: 'en-US',
                    page: currentPage,
                },
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${apiToken}`
                }
            })
            setCurrentPageMovies(response.data.results);
            setMovies([...movies, ...response.data.results])
            setCurrentPage(currentPage + 1)
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

    const RenderSeeMore = () => (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={getTrendingMovies}>
            <View className='min-h-[260px] rounded-2xl justify-center gap-4 items-center flex-row w-[150px] bg-popgold'>
                {isLoading ? (<ActivityIndicator color='white' size={20} />) :
                    (<View className='w-full justify-center gap-4 items-center flex-row'>
                        <Text className='text-white font-pmedium text-lg'>See More</Text>
                        <Ionicons name='arrow-forward' size={20} color={'#ffffff'} />
                    </View>)
                }
            </View>
        </TouchableOpacity>
    )


    return (
        <View>
            <Text className='text-white mb-4 font-pregular text-lg'>Now Playing</Text>
            <View className='h-[300px]'>
                <FlatList
                    data={movies}
                    snapToAlignment='center'
                    bounces={false}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    // onScroll={handleScroll}
                    scrollEventThrottle={2}
                    keyExtractor={(item) => {
                        return `${item.id} - ${Math.random(5)}`
                    }}
                    // ref={flatListRef}
                    renderItem={({ item }) => (
                        <MovieListItem key={item.id} item={item} roundedRating={getRoundedRating(item)} />
                    )}
                    ListFooterComponent={RenderSeeMore}
                />
            </View>
        </View>
    )
}

export default TrendingVideos