import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// MaterialCommunityIcons comes with Expo
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {weatherConditions} from '../utils/WeatherConditions';
import PropTypes from 'prop-types';


//Using a Fx rather than Class so we can recieve props, but state not needed
const Weather = ({weather, temperature}) => {
    return (
        <View 
            style = {[
                styles.weatherContainer, 
                { backgroundColor: weatherConditions[weather].color}    
                ]} 
        >
            <View style = {styles.headerContainer} >
                <MaterialCommunityIcons size={70} name={weatherConditions[weather].icon} color={'#fff'} />
                <Text style= {styles.tempText}> {temperature}°</Text>
            </View>
            <View style = {styles.bodyContainer} >
                <Text style= {styles.title}>{weather}</Text>
                <Text style= {styles.subtitle}>{weatherConditions[weather].subtitle}</Text>
            </View>
        </View>
    )
};

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string
};

const styles = StyleSheet.create ({
    weatherContainer: {
        flex: 1,
        backgroundColor: '#f7b733'
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    tempText: {
        fontSize: 48,
        color: '#fff'
    },
    title: {
        fontSize: 40,
        color: '#fff'
    },
    subtitle: {
        fontSize: 28,
        color: '#fff'
    }
})

export default Weather;