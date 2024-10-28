import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TabsLayout from './_layout'
import { SafeAreaView } from 'react-native'
import Logo from '../../assets/images/Logo2.png'
import Naruto from '../../assets/images/Naruto.jpeg'
import OnePiece from '../../assets/images/OnePiece.jpeg'
import ThePlatform from '../../assets/images/ACTIONTHUMB.jpg'
import enders from '../../assets/images/enders.jpeg'
import { Ionicons } from '@expo/vector-icons'
import Carousel from 'react-native-reanimated-carousel'
import axios from 'axios'
import NowPayingVideos from '../../components/HomeComponents/NowPlayingVideos'
import TrendingVideos from '../../components/HomeComponents/TrendingVideos'
import TopRatedVideos from '../../components/HomeComponents/TopRatedVideos'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const getTrendingMovies = async () => {
    //         try {
    //             setIsLoading(true);
    //             const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day',
    //                 {
    //                     params: { language: 'en-US' },
    //                     headers: {
    //                         Accept: 'application/json',
    //                         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzVkOTM4NzIzOTRlNjFiNmU1Nzg3OWMzNDA3NDhiNCIsIm5iZiI6MTcyOTIyNjkzOC43NTAyLCJzdWIiOiI2NzEwNWViY2RiNzljOWNlYWUwZWMyMWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pznTWJSUZe2wBsbvZ9RZsY5-tDa7_-zouGBdaLIBU-A'
    //                     }
    //                 });
    //             console.log(response.data.results)
    //             setMovies(response.data.results);
    //             setIsLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             setError(error.message); // Set error state
    //             setIsLoading(false);
    //         }
    //     };

    //     getTrendingMovies();
    // }, []);

    // const width = Dimensions.get('window').width
    // const images = [
    //     {
    //         name: 'the platform',
    //         image: ThePlatform
    //     },
    //     {
    //         name: 'enders',
    //         image: enders
    //     }
    // ]
    // const MyCarousel = ({ item }) => {
    //     return (
    //         <>
    //             {isLoading && <Text className='text-white'>Loading...</Text>}
    //             {error && <Text className='text-red-600'>Error:{error}</Text>}
    //             {!isLoading && !Error && (
    //                 <>
    //                     {
    //                         movies.map((movie) => (
    //                             <View style={styles.carouselItem} className='border rounded-2xl overflow-hidden relative border-red-600 mx-1.5'>
    //                                 <View>
    //                                     <Image
    //                                         source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
    //                                         className='border border-white'
    //                                         style={styles.carouselImage}
    //                                         resizeMode='cover'
    //                                     />
    //                                 </View>
    //                                 <Text className='absolute bottom-4 left-4 text-lg capitalize text-white'>{movie.original_title}</Text>
    //                                 <TouchableOpacity
    //                                     activeOpacity={0.8}
    //                                     style={{
    //                                         flexDirection: 'row',
    //                                         justifyContent: 'space-between',
    //                                         alignItems: 'center',
    //                                         position: 'absolute',
    //                                         bottom: 16,
    //                                         right: 16,
    //                                         paddingVertical: 4,
    //                                         paddingHorizontal: 8,
    //                                         borderRadius: 2,
    //                                         backgroundColor: '#fdb94a',
    //                                     }}
    //                                 >
    //                                     <Ionicons name='arrow-down-circle' color="#ffffff" size={18} />
    //                                     <Text className='text-white'>Download</Text>
    //                                 </TouchableOpacity>
    //                             </View>
    //                         ))
    //                     }
    //                 </>
    //             )}
    //         </>
    //     )
    // }
    return (
        <>
            <SafeAreaView
                className='bg-primary-100' style={{ backgroundColor: '#211f24', height: '100%', flex: 1 }}>
                <ScrollView>
                    <View style={{ paddingHorizontal: 16, justifyContent: 'space-between', marginVertical: 28, overflow: 'hidden' }} className='border border-white'>
                        <View>
                            <View style={styles.Home_Header}>
                                <View>
                                    <Text className='text-white text-sm font-plight'>Welcome Back</Text>
                                    <Text className='text-white text-2xl font-psemibold leading-tight'>Jazzy Rain</Text>
                                </View>
                                <Image
                                    source={Logo}
                                    style={styles.Home_Image}
                                    resizeMode='contain'
                                />
                            </View>
                            <View style={styles.Search}>
                                <TextInput
                                    placeholder='Search a movie'
                                    placeholderTextColor="#7b7b8b"
                                    style={styles.input}
                                />
                                <Ionicons name='search' size={24} color="white" />
                            </View>
                        </View>
                        <NowPayingVideos />
                        <TrendingVideos />
                        <TopRatedVideos />
                    </View>
                </ScrollView>
                <StatusBar backgroundColor='#161622' style='light' />
            </SafeAreaView>
        </>
    )
}

export default Home

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