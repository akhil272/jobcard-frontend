import {
    FormControl,
    FormLabel,
    Grid,
    TextField as TextFieldComponent,
    TextFieldProps,
} from '@material-ui/core';
import { Autocomplete as AutocompleteComponent } from '@material-ui/lab';
import { SelectOption } from '@Store/common/types';
import { ChangeEvent } from 'react';
import { UseFormMethods } from 'react-hook-form';

import styles from './styles';

type DropdownProps = Partial<Pick<UseFormMethods, 'control' | 'errors'>> & {
    freeSolo?: boolean;
    label?: string;
    error?: string;
    defaultValue?: SelectOption;
    options: SelectOption[];
    onBlur?: React.FocusEventHandler<HTMLDivElement>;
    onChange?: (value: SelectOption | string) => void;
    onChangeInputValue?: (event: ChangeEvent<{}>, value: string) => void;
    placeholder?: string;
};

const Dropdown = ({
    freeSolo,
    label,
    error,
    defaultValue,
    options,
    onBlur,
    onChange,
    onChangeInputValue,
    placeholder,
}: DropdownProps) => {
    const classes = styles();
    return (
        <AutocompleteComponent
            onChange={(_event: ChangeEvent<{}>, value: SelectOption | string) => {
                if (onChange) {
                    onChange(value);
                }
            }}
            onInputChange={onChangeInputValue}
            onBlur={onBlur}
            options={options}
            autoComplete
            defaultValue={defaultValue}
            freeSolo={freeSolo}
            disableClearable
            filterOptions={(option) => option}
            getOptionLabel={(option: SelectOption) => option.label}
            getOptionSelected={(option, selected) => option?.value === selected?.value}
            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
                <FormControl className={classes.formControl}>
                    <Grid>
                        <FormLabel>{label}</FormLabel>
                    </Grid>
                    <Grid>
                        <TextFieldComponent
                            {...params}
                            variant="outlined"
                            error={!!error}
                            helperText={error}
                            placeholder={placeholder}
                            size="small"
                        />
                    </Grid>
                </FormControl>
            )}
        />
    );
};

export default Dropdown;
