import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ValidationError from './ValidationError'
import { Radio, FormControlLabel } from '@material-ui/core';
import { default as RadioContent } from "@material-ui/core/RadioGroup"
function RadioGroup(props) {
  const { label, name, options, ...rest } = props

  return (
    <>
      <label>{label}</label>
      <Field name={name}>

        {({ field }) => {
          return (
            <RadioContent row>
              {options.map(option => {
                return (
                  <React.Fragment key={option.key}>
                    <FormControlLabel
                      type='Radio'
                      control={<Radio color="primary" />}
                      id={option.value}
                      {...field}
                      {...rest}
                      value={option.value}
                      checked={field.value === option.value}

                      label={option.key}
                    />

                  </React.Fragment>
                )
              })}
            </RadioContent>
          )
        }}

      </Field>
      <ErrorMessage component={ValidationError} name={name} />
    </>
  )
}

export default RadioGroup
