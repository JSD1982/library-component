import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ValidationError from './ValidationError'
import Checkbox from '@material-ui/core/Checkbox';

function CheckboxGroup (props) {
  const { required, label, name, options, ...rest } = props
  const validateField = value => {
    let errors
    if (!value) {
      errors = `El campo ${name} es obligatorio`
    }
    return errors
  }
  return (
    <>
      <label>{label}</label>
      <Field name={name} validate={required && validateField}>
        {({ form, field }) => {
          const validareRequired = form.errors[name] && form.touched[name] ? "error-field" : form.submitCount >= 1 ? "success-field" : null
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                 <div className={required && validareRequired}>
                <Checkbox
                  type='checkbox'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  
                />
                <label htmlFor={option.value}>{option.key}</label>
               
                </div>
              </React.Fragment>
            )
          })
        }}
        
      </Field>
      {props.errorMessage && (<ErrorMessage component={ValidationError} name={name} />)}
    </>
  )
}

export default CheckboxGroup
