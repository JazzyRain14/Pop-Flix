import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Carousel from 'react-native-reanimated-carousel'
import axios from 'axios'

const TrendingVideos = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getTrendingMovies = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day',
                    {
                        params: { language: 'en-US' },
                        headers: {
                            Accept: 'application/json',
                            Authorization: `Bearer ${process.env.API_KEY}` 
                        }
                    });
                // console.log(response.data.results)
                setMovies(response.data.results);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message); // Set error state
                setIsLoading(false);
            }
        };

        getTrendingMovies();
    }, []);

    const width = Dimensions.get('window').width

    return (
        <View>
            <Text className='text-white mb-4 font-pregular text-lg'>Trending videos</Text>
            <View style={styles.carouselContainer}>
                <Carousel
                    width={width}
                    height={width / 2}
                    // autoPlay={true}
                    data={movies}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    renderItem={({ item }) => (
                        <View style={styles.carouselItem}>
                            {isLoading ?
                                <ActivityIndicator size={'large'}
                                /> : <Image
                                    source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
                                    style={styles.carouselImage}
                                    resizeMode='cover'
                                />
                            }
                            <View className='absolute bottom-4 gap-4 flex-row px-4'>
                                <Text numberOfLines={1} className='text-lg capitalize flex-1 text-white font-psemibold'>{item.title}</Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        paddingVertical: 4,
                                        paddingHorizontal: 8,
                                        borderRadius: 2,
                                        backgroundColor: '#fdb94a',
                                    }}
                                >
                                    <Ionicons name='arrow-down-circle' color="#ffffff" size={18} />
                                    <Text className='text-white'>Download</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

export default TrendingVideos

const styles = StyleSheet.create({
    Home_Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Home_Image: {
        width: 80,
        height: 60,
    },
    input: {
        flex: 1,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        lineHeight: 24,
        width: '100%',
        color: '#ffffff'
    },
    Search: {
        flexDirection: 'row',
        justifyContent: 'between',
        backgroundColor: '#1e1e2d',
        borderWidth: 2,
        borderColor: '#232533',
        alignItems: 'center',
        borderRadius: 16,
        height: 64,
        paddingHorizontal: 16,
        marginVertical: 20
    },
    carouselContainer: {
        // overflow: 'hidden',
        width: '100%',
        height: 200,
        alignContent: 'center',
        justifyContent: 'center',
    },
    carouselItem: {
        flex: 1,
        justifyContent: 'center',
        width: '90%',
    },
    carouselImage: {
        width: '100%',
        height: '100%',
    },
})