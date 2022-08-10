import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup as RadioGroupComponent,
} from '@material-ui/core';
import { SelectOption } from '@Store/common/types';
import { ChangeEvent } from 'react';
import { Controller, UseFormMethods } from 'react-hook-form';

import styles from './styles';

type RadioOption = SelectOption & { disabled?: boolean };

type RadioGroupProps = Partial<Pick<UseFormMethods, 'control' | 'errors'>> & {
    name: string;
    label?: string;
    error?: string;
    fullWidth?: boolean;
    defaultValue?: string;
    options: RadioOption[];
    disabled?: boolean;
    labelText?: string;
};

const RadioGroup = ({
    name,
    label,
    control,
    error,
    defaultValue,
    options,
    disabled,
    labelText,
}: RadioGroupProps) => {
    const classes = styles();
    return (
        <Controller
            name={name}
            control={control}
            render={({ onChange }) => (
                <FormControl className={classes.formControl} disabled={disabled} error={!!error}>
                    <Grid>
                        <FormLabel>{labelText}</FormLabel>
                    </Grid>
                    <Grid>
                        <FormLabel>{label}</FormLabel>
                        <RadioGroupComponent
                            className={classes.textFieldFill}
                            aria-label={name}
                            name={name}
                            defaultValue={defaultValue}
                            onChange={(_event: ChangeEvent<{}>, value: string) => onChange(value)}>
                            {options.map(
                                ({ value, label: optionLabel, disabled: optionDisable }) => (
                                    <FormControlLabel
                                        key={value}
                                        value={value}
                                        control={<Radio />}
                                        label={optionLabel}
                                        disabled={optionDisable}
                                    />
                                ),
                            )}
                        </RadioGroupComponent>
                    </Grid>
                </FormControl>
            )}
        />
    );
};

export default RadioGroup;
