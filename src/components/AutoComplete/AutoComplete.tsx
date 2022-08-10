import {
    FormControl,
    FormLabel,
    Grid,
    TextField as TextFieldComponent,
    TextFieldProps,
} from '@material-ui/core';
import { Autocomplete as AutocompleteComponent, createFilterOptions } from '@material-ui/lab';
import { SelectOption } from '@Store/common/types';
import { ChangeEvent } from 'react';
import { Controller, UseFormMethods } from 'react-hook-form';

import styles from './styles';

type inputValue = { inputValue?: string };

type AutoCompleteOption = SelectOption & inputValue;

const filter = createFilterOptions<AutoCompleteOption>();

type AutocompleteProps = Partial<Pick<UseFormMethods, 'control' | 'errors'>> & {
    name: string;
    freeSolo?: boolean;
    label?: string;
    error?: string;
    fullWidth?: boolean;
    defaultValue?: AutoCompleteOption;
    options: AutoCompleteOption[];
    disabled?: boolean;
    onBlur?: React.FocusEventHandler<HTMLDivElement>;
    onChangeInputValue?: (event: ChangeEvent<{}>, value: string) => void;
};

const Autocomplete = ({
    name,
    freeSolo,
    label,
    control,
    error,
    defaultValue,
    options,
    disabled,
    onBlur,
    onChangeInputValue,
}: AutocompleteProps) => {
    const classes = styles();
    return (
        <Controller
            name={name}
            control={control}
            render={({ onChange }) => (
                <AutocompleteComponent
                    onChange={(
                        _event: ChangeEvent<{}>,
                        value: AutoCompleteOption | string | inputValue,
                    ) => {
                        if (typeof value === 'string') {
                            onChange({
                                label: value,
                            });
                        } else if (value && (value as inputValue).inputValue) {
                            console.log(`first console ${value.inputValue}`);

                            onChange({
                                label: (value as inputValue).inputValue,
                            });
                        } else {
                            console.log(`second console ${value}`);
                            onChange(value);
                        }
                    }}
                    onInputChange={onChangeInputValue}
                    onBlur={onBlur}
                    options={options}
                    defaultValue={defaultValue}
                    autoComplete
                    freeSolo={freeSolo}
                    disableClearable
                    disabled={disabled}
                    // filterOptions={(option) => option}
                    filterOptions={(option, params) => {
                        const filtered = filter(option, params);

                        // Suggest the creation of a new value
                        if (params.inputValue !== '') {
                            filtered.push({
                                inputValue: params.inputValue,
                                label: `Add "${params.inputValue}"`,
                                value: '',
                            });
                        }

                        return filtered;
                    }}
                    getOptionLabel={(option: AutoCompleteOption) => {
                        // Value selected with enter, right from the input
                        if (typeof option === 'string') {
                            return option;
                        }
                        // Add "xxx" option created dynamically
                        if (option.inputValue) {
                            return option.inputValue;
                        }
                        // Regular option
                        return option.label;
                    }}
                    getOptionSelected={(option, selected) => option?.value === selected?.value}
                    renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
                        <FormControl className={classes.formControl}>
                            <Grid item>
                                <FormLabel>{label}</FormLabel>
                            </Grid>
                            <Grid>
                                <TextFieldComponent
                                    {...params}
                                    variant="outlined"
                                    error={!!error}
                                    helperText={error}
                                />
                            </Grid>
                        </FormControl>
                    )}
                />
            )}
        />
    );
};

export default Autocomplete;
