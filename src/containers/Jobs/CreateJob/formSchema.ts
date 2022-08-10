import { number, object, string } from 'yup';

const mobileNumberRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// const vehicleNumberRegExp = /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/i;
const vehicleBuildRegExp = /^[0-9]{4}$/i;
const emailRegExp = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9.-]+$/i;

const schema = object().shape({
    vehicleType: object().shape({ value: string(), label: string() }).required(),
    // vehicleNumber: string()
    //     .required('Enter a vehicle number')
    //     .matches(vehicleNumberRegExp, 'Enter a valid vehicle number'),
    vehicleBuild: string().matches(vehicleBuildRegExp, 'Enter a valid year'),
    odometer: number().required('Enter valid odemeter').min(1, 'Enter a valid odemeter reading'),
    firstName: string(),
    phoneNumber: string().matches(mobileNumberRegExp, 'oops, please enter a valid mobile nunber'),
    email: string().matches(emailRegExp, 'Hey that seems invalid mail address'),
    pickupUserFirstName: string(),
    driverMobileNumber: string().matches(
        mobileNumberRegExp,
        'oops, please enter a valid mobile nunber',
    ),
    pickupUserEmail: string().matches(emailRegExp, 'Hey that seems invalid mail address'),
});

export default schema;
