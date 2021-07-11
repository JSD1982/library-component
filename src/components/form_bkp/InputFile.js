import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ValidationError from "./ValidationError"

function InputFile(props) {
    const { required, label, name, ...rest } = props
    const fileRef = React.useRef(null);

    const validateField = () => {
        let errors
        if(fileRef.current.files.length === 0) {
            errors = `El campo ${name} es obligatorio`
        } 
        return errors      
    }

    return (
        <>
        <Field name={name} validate={required && validateField} >
        {({ form, field }) => {
        const { setFieldValue } = form
        const { value } = field
        return (
            <>
            <label for="file">{label}</label>
            <input
            ref={fileRef}
            id={name} 
            type="file" 
            {...field}
            {...rest}
            value={value}
            onChange={(event) => {setFieldValue('file', event.currentTarget.files)}}
            />
            {form.submitCount >= 1 && form.errors[name] && <ErrorMessage component={ValidationError} name={name}/>}
            </>
        )
        }}
        
        </Field>
        
        
        </>
    )
}
export default InputFile
