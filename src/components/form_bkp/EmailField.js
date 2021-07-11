import React from 'react'
import { Field } from 'formik'
import TextField from '@material-ui/core/TextField';
function EmailField({required, label,  ...rest}) { 
    const validateEmail = value => {
        let errors
        if(!value) {
            errors = 'Required'
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            errors = 'Invalid email format'
        }
        return errors      
    }
    return (

        <Field name="email" validate={required && validateEmail}>
            {({ field, form }) => {
                const valueRequired = form.errors.email && form.touched.email ? "error-field" : form.submitCount >= 1 ? "success-field" : null;
                return (
                <div className={required && valueRequired}>
                <TextField 
                    variant="outlined"
                    htmlFor="email"
                    id="email"
                    label={label ? label : "email" }
                    error={form.errors.email && form.touched.email}
                    helperText={form.errors.email && form.touched.email  && form.submitCount >= 1  ? form.errors.email : null}
                    {...rest} 
                    {...field} 
                    
                  
                />
                 
                </div>
            )}}
        </Field>
    )
}
export default EmailField
