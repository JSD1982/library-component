import React from "react";
import { Field } from 'formik'
import { TextField, Typography } from '@material-ui/core';
import SelectCountries from "./SelectCountries"

const InputSelectPhone = ({
  countryValue,
  countryPhone,
  name,
  value,
  label,
  required,
  ...rest

}) => {

  const [activeSelect, setactiveSelect] = React.useState(false);


  const validateField = value => {
    let errors
    if (!value) {
      errors = `El campo ${name} es obligatorio`
    }
    return errors
  }

  const SingleValue = ({
    cx,
    getStyles,
    selectProps,
    data,
    isDisabled,
    className,
    ...props
  }) => {
    console.log(props);
    return (
      <div style={{ display: "flex" }}  {...props}>
        <div><span className={`flag-icon flag-icon-${data.iso3166_a2}`} /> +</div>
        <div>{parseInt(data.value)}</div>
      </div>
    );
  };

  return (
    <>
      <>
        <div className="content-form-box">
          <div className={`${!activeSelect ? 'value-country-number' : 'value-country-number-open'}`}>
            <Typography variant="body1" component="p" >
              <SelectCountries
                onMenuOpen={() => {
                  setactiveSelect(true)
                }}
                onMenuClose={() => {
                  setactiveSelect(false)
                }}
                label='Select a country'
                name='countryPhone'
                //defaultValue={"SingleValue"}
                components={{SingleValue}}
                customOptionRender={({ label, iso3166_a2 }) => (
                  <>
                    <div style={{ display: "flex" }} >
                      <div><span className={`flag-icon flag-icon-${iso3166_a2}`} /> {label}</div>
                    </div>
                  </>
                )}
              />
            </Typography>
          </div>
          {!activeSelect && (
            <Field name={name} validate={required && validateField}>
              {({ field, form }) => {
              const validateRequired = form.errors[name] && form.touched[name] ? "error-field" : form.submitCount >= 1 ? "success-field" : null;
              return (
                <>
                  {console.log("form field", form)}
                  <div className={required && validateRequired}>
                    <TextField
                      variant="outlined"
                      htmlFor={name}
                      id={name}
                      label={label}
                      error={form.submitCount >= 1 && form.errors[name] ? form.touched[name] : null}
                      helperText={form.errors[name] && form.touched[name] && form.submitCount >= 1 ? form.errors[name] : null}
                      {...rest}
                      {...field}
                    />
                  </div>
                </>
              )}}
            </Field>
          )}
        </div>
      </>

    </>
  )
}

export default InputSelectPhone;