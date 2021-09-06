import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import {Ionicons} from '@expo/vector-icons'

function DefaultHeaderButton(props:any) {
    return (
       <HeaderButton
       {...props}
       IconComponent={Ionicons}
       iconSize={23}
       color="white"
       />
    )
}

export default DefaultHeaderButton
