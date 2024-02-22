// authConfig.js
import Amplify from 'aws-amplify';
//import Auth from '@aws-amplify/auth';
//import { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: 'us-east-2',
        userPoolId: 'us-east-2_uoJRKR3hh',
        userPoolWebClientId: '2d3bdgipp0iie0bl5dt26ki2pe'
    }
});
const amplifyConfig = {
    Auth: {
        region: 'us-east-2',
        userPoolId: 'us-east-2_uoJRKR3hh',
        userPoolWebClientId: '2d3bdgipp0iie0bl5dt26ki2pe'
    }
};

Amplify.configure(amplifyConfig);
