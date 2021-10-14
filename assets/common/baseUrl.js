import { Platform } from 'react-native'


//let baseURL = 'http://192.168.1.1:3000/api/v1/';

let baseURL = 'http://192.168.1.1:3000/api/v1/';



{Platform.OS == 'android'
//? baseURL = 'http://192.168.1.1:3000/api/v1/'
//: baseURL = 'http://192.168.1.1:3000/api/v1/'

? baseURL = 'http://192.168.1.1:3000/api/v1/'
: baseURL = 'http://192.168.1.1:3000/api/v1/'

}

export default baseURL;
