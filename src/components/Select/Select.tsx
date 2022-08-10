import {
    FormControl,
    FormLabel,
    Grid,
    MenuItem,
    Select as SelectComponent,
} from '@material-ui/core';
import { SelectOption } from '@Store/common/types';
import { UseFormMethods } from 'react-hook-form';

import styles from './styles';

type Props = Partial<Pick<UseFormMethods, 'register' | 'errors'>> & {
    label: string;
    name: string;
    error?: string;
    disabled?: boolean;
    labelText?: string;
    options: SelectOption[];
};

const Select = ({ disabled, label, name, options, register, error, labelText }: Props) => {
    const classes = styles();
    return (
        <FormControl className={classes.formControl} disabled={disabled} error={!!error}>
            <Grid>
                <FormLabel>{labelText}</FormLabel>
            </Grid>
            <Grid>
                <SelectComponent
                    variant="outlined"
                    className={classes.textFieldFill}
                    error={!!error}
                    inputRef={register}
                    name={name}
                    label={label}>
                    {options.map((option) => (
                        <MenuItem value={option.value} key={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </SelectComponent>
            </Grid>
        </FormControl>
    );
};

export default Select;
