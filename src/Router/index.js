import React, {Component} from 'react'
import { TabNavigator } from 'react-navigation';
import {Icon} from 'native-base'
import Cbc from '../Screens/Cbc'
import Nfl from '../Screens/Nfl'
import Search from '../Screens/Search'


const Router = TabNavigator({
    Nfl: { screen: Nfl, 
        navigationOptions: {
            swipeEnabled: true,
            animationEnabled: true,
            tabBarIcon: <Icon name="document" />
        } },

    Cbc: { screen: Cbc,
        navigationOptions: {
            swipeEnabled: true,
            animationEnabled: true,
            tabBarIcon: <Icon name="document" />
        } },
    Search: { screen: Search,
        navigationOptions: {
            swipeEnabled: true,
            animationEnabled: true,
            tabBarIcon: <Icon name="search" />
        } },
})

export default Router