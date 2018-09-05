import React from 'react'
import { Text } from 'react-native'

export const onEmailChanged = (email) => {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email))
        console.log("True");
    else   
        console.log("False");
}



