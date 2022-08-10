/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Autocomplete from '@Components/AutoComplete';
import RadioGroup from '@Components/RadioGroup';
// import Select from '@Components/Select';
import TextField from '@Components/TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, FormControlLabel, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { CreateJobProps } from '@Store/jobCards/types';
import { Ownership } from '@Utils/enums';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { User } from '../../../store/users/types';
import formSchema from './formSchema';
import JobHistory from './JobHistory';
import styles from './styles';
import SuccessDialog from './SuccessDialog';

type optionType = {
    label: string;
    value: string;
};

type FormData = {
    checked: boolean;
    vehicleNumber:
        | (optionType & {
              userId: number;
              user: User;
              model: {
                  id: number;
                  name: string;
                  type: {
                      id: number;
                      name: string;
                  };
              };
              buildYear: number;
              customerOwnership: Ownership;
          })
        | null;
    vehicleType: optionType;
    vehicleModelId: optionType;
    vehicleBuild: string;
    buildType: boolean;
    odometer: string;
    customerOwnership: boolean;
    firstName: string;
    phoneNumber: string;
    email: string;
    pickupByOwner: boolean;
    pickupUserFirstName: string;
    pickupUserPhone: string;
    pickupUserEmail: string;
    pickupUserOwnership: boolean;
    rimSize: optionType | null;
    subCategories: any;
};

const CreateJob = ({
    vehicleModels,
    rimSizes,
    services,
    vehicles,
    getServices,
    getVehicleModels,
    getRimSizes,
    createJobCard,
    getVehicles,
}: CreateJobProps) => {
    const { control, errors, handleSubmit, register, watch, setValue } = useForm<FormData>({
        mode: 'all',
        reValidateMode: 'onSubmit',
        resolver: yupResolver(formSchema),
        defaultValues: { vehicleNumber: null },
    });
    const [servicePrices, setServicePrices] = useState<{ [key: number]: number }>({});
    const watchSubCategories = watch('subCategories', []);
    const watchVehicleNumber = watch('vehicleNumber', null);

    useEffect(() => {
        if (watchVehicleNumber) {
            if (watchVehicleNumber.model) {
                if (watchVehicleNumber.model.type) {
                    setValue('vehicleType', {
                        value: watchVehicleNumber.model.type.id,
                        label: watchVehicleNumber.model.type.name,
                    });
                }
                setValue('vehicleModel', {
                    value: watchVehicleNumber.model.id,
                    label: watchVehicleNumber.model.name,
                });
            }
            if (watchVehicleNumber.user) {
                setValue(
                    'firstName',
                    `${watchVehicleNumber.user.firstName}${
                        watchVehicleNumber.user.middleName
                            ? ` ${watchVehicleNumber.user.middleName}`
                            : ''
                    } ${watchVehicleNumber.user.lastName}`,
                );
                setValue('phoneNumber', watchVehicleNumber.user.phoneNumber);
                setValue('email', watchVehicleNumber.user.email);
            }
            setValue('vehicleBuild', watchVehicleNumber.buildYear);
            setValue('customerOwnership', watchVehicleNumber.customerOwnership);
        }
    }, [setValue, watchVehicleNumber]);

    useEffect(() => {
        const prices: { [key: number]: number } = {};
        services.forEach((s) => {
            s.subCategories.forEach((sc) => (prices[Number(sc.value)] = sc.price));
        });
        setServicePrices(prices);
    }, [services]);

    const [openSuccess, setOpenSuccess] = useState<boolean>(false);

    const onSubmit = async (data: FormData) => {
        const selectedSubCategories: number[] = [];
        data.subCategories.forEach((element: boolean, index: number) => {
            if (element) {
                selectedSubCategories.push(index);
            }
        });
        const payload = {
            ...(data.vehicleNumber?.value
                ? {
                      customerId: data.vehicleNumber?.userId,
                  }
                : {
                      firstName: data.firstName,
                      lastName: data.firstName,
                      phoneNumber: data.phoneNumber,
                      email: data.email,
                  }),
            ...(data.vehicleNumber?.value
                ? {
                      vehicleId: data.vehicleNumber?.value,
                  }
                : {
                      vehicleNumber: data.vehicleNumber?.label,
                      vehicleModelId: data.vehicleModelId.value,
                      vehicleBuild: Number(data.vehicleBuild),
                  }),
            buildType: data.buildType,
            odometer: Number(data.odometer),
            customerOwnership: data.customerOwnership ?? Ownership.OWNER,
            pickupByOwner: data.pickupByOwner,
            ...(!data.pickupByOwner && {
                pickupUserFirstName: data.pickupUserFirstName,
                pickupUserPhone: data.pickupUserPhone,
                pickupUserEmail: data.pickupUserEmail,
                pickupUserOwnership: data.pickupUserOwnership,
            }),
            rimSize: data.rimSize?.value,
            subCategories: selectedSubCategories,
        };
        const response = await createJobCard(payload);
        if (response.success) {
            setOpenSuccess(!openSuccess);
            // eslint-disable-next-line no-alert
        }
    };

    useEffect(() => {
        getVehicleModels({ search: '' });
    }, [getVehicleModels]);
    useEffect(() => {
        getRimSizes({ search: '' });
    }, [getRimSizes]);
    useEffect(() => {
        getServices();
    }, [getServices]);
    const classes = styles();
    const [checked, setChecked] = useState(false);
    const [openJobHistory, setOpenJobHistory] = useState<boolean>(false);

    const handleSameAsInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    const onChangeVehicleNumberInput = (event: React.ChangeEvent<{}>, value: string) => {
        getVehicles({ search: value });
    };

    return (
        <Grid container className={classes.root}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item xs={12}>
                    <Typography variant="h6">Create New Job Card</Typography>
                </Grid>
                <Grid className={classes.vehicleDetails} item>
                    <Paper style={{ backgroundColor: '#F4F8FB' }}>
                        <Grid item className={classes.main}>
                            <Autocomplete
                                freeSolo
                                label="Vehicle Number"
                                name="vehicleNumber"
                                control={control}
                                onChangeInputValue={onChangeVehicleNumberInput}
                                options={vehicles}
                                error={errors.vehicleNumber?.message}
                            />
                            <Grid
                                style={{
                                    display: 'flex',
                                    justifyContent: 'end',
                                }}>
                                <Button
                                    variant="text"
                                    onClick={() => setOpenJobHistory(!openJobHistory)}>
                                    View Job History {openJobHistory ? <JobHistory /> : null}
                                </Button>
                            </Grid>
                            <Autocomplete
                                label="Vehicle Model"
                                name="vehicleModelId"
                                control={control}
                                error={errors.vehicleType?.value?.message}
                                options={vehicleModels}
                                disabled={!!watchVehicleNumber?.value}
                            />
                            <TextField
                                label="Build Year"
                                name="vehicleBuild"
                                placeholder="Build Year "
                                register={register}
                                error={errors.vehicleBuild?.message}
                                disabled={!!watchVehicleNumber?.value}
                            />
                            <RadioGroup
                                name="buildType"
                                control={control}
                                options={[
                                    { label: 'Old', value: 'OLD' },
                                    { label: 'New', value: 'NEW' },
                                ]}
                            />

                            <TextField
                                label="Odometer"
                                name="odometer"
                                placeholder="Enter Odometer value"
                                register={register}
                                error={errors.odometer?.message}
                            />
                        </Grid>
                    </Paper>
                </Grid>
                <Grid className={classes.contactDetails} item>
                    <Grid item className={classes.main}>
                        <RadioGroup
                            labelText="Ownership"
                            name="customerOwnership"
                            control={control}
                            options={[
                                { label: 'Owner', value: Ownership.OWNER },
                                { label: 'Other', value: Ownership.OTHER },
                                { label: 'Company', value: Ownership.COMPANY },
                            ]}
                            disabled={!!watchVehicleNumber?.value}
                        />
                        <TextField
                            label="Name"
                            name="firstName"
                            placeholder="Enter car owner name"
                            register={register}
                            error={errors.firstName?.message}
                            disabled={!!watchVehicleNumber?.value}
                        />
                        <TextField
                            label="Mobile No."
                            name="phoneNumber"
                            placeholder="Enter owner mobile no. 91xxxxxxxxxx"
                            register={register}
                            error={errors.phoneNumber?.message}
                            disabled={!!watchVehicleNumber?.value}
                        />
                        <TextField
                            label="Email"
                            name="email"
                            placeholder="Enter owner mail id"
                            register={register}
                            error={errors.email?.message}
                            disabled={!!watchVehicleNumber?.value}
                        />
                        <Grid container className={classes.pickUpSection}>
                            <Grid>Pickup up</Grid>
                            <Grid>
                                <FormControlLabel
                                    label="Same as above"
                                    name="pickupByOwner"
                                    control={<Checkbox onChange={handleSameAsInput} />}
                                    inputRef={register}
                                />
                            </Grid>
                        </Grid>
                        {!checked && (
                            <>
                                <TextField
                                    label="Name"
                                    name="pickupUserFirstName"
                                    placeholder="Enter pickup name"
                                    register={register}
                                    error={errors.pickupUserFirstName?.message}
                                />
                                <TextField
                                    label="Mobile No."
                                    name="pickupUserPhone"
                                    placeholder="Enter pickup mobile no."
                                    register={register}
                                    error={errors.pickupUserPhone?.message}
                                />
                                <TextField
                                    label="Email"
                                    name="pickupUserEmail"
                                    placeholder="Enter pickup mail id"
                                    register={register}
                                    error={errors.pickupUserEmail?.message}
                                />
                                <RadioGroup
                                    labelText="Ownership"
                                    name="pickupUserOwnership"
                                    control={control}
                                    error={errors.vehicleType?.value?.message}
                                    options={[
                                        { label: 'Owner', value: 'Owner' },
                                        { label: 'Other', value: 'Other' },
                                        { label: 'Company', value: 'Company' },
                                    ]}
                                />
                            </>
                        )}
                    </Grid>
                </Grid>
                <Grid className={classes.serviceDetails} item>
                    <Paper style={{ backgroundColor: '#F4F8FB' }}>
                        <Grid item className={classes.main}>
                            <Autocomplete
                                name="rimSize"
                                label="Rim Size"
                                control={control}
                                options={rimSizes}
                            />
                            <Grid container>
                                <Grid item xs={12}>
                                    Select Services
                                </Grid>
                                <Grid item xs={12} className={classes.service}>
                                    {services.map((c) => (
                                        <Paper className={classes.serviceList} key={c.id}>
                                            <Grid item>
                                                {c.category}
                                                {c.subCategories.map((s) => (
                                                    <Grid item key={s.value}>
                                                        <Checkbox
                                                            inputRef={register}
                                                            name={`subCategories.${s.value}`}
                                                            inputProps={{
                                                                'aria-label': 'primary checkbox',
                                                            }}
                                                        />
                                                        {s.label}
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Paper>
                                    ))}
                                </Grid>
                            </Grid>
                            Total Estimated Cost :
                            {watchSubCategories.reduce((acc: number, cur: boolean, idx: number) => {
                                let amount = acc;
                                if (cur) {
                                    amount += servicePrices[idx];
                                }
                                return amount;
                            }, 0)}
                        </Grid>
                        <Grid item className={classes.button}>
                            <Button type="submit" color="primary" variant="contained" size="large">
                                CREATE JOB CARD
                            </Button>
                        </Grid>
                    </Paper>
                    {openSuccess ? <SuccessDialog /> : null}
                </Grid>
            </form>
        </Grid>
    );
};

export default CreateJob;
