import { object, string } from 'yup';

const vehicleBuildRegExp = /^[0-9]{4}$/i;

const schema = object().shape({
    vehicleType: object().shape({ value: string(), label: string() }).required(),

    vehicleBuild: string().matches(vehicleBuildRegExp, 'Enter a valid year'),
});

export default schema;
