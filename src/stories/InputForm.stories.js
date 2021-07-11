import React from 'react';
import {FormField, FormControl}  from '../components';
import { withKnobs, text } from "@storybook/addon-knobs";
import {Button} from '@material-ui/core';
export default { title: 'Components|Form', decorators: [withKnobs] };

const initialValues = {
    email: "",
    FormField: "",
    checkboxOption:"",
    radioOption: '',
    areaText:'',
    selectOptions: '',
    country: '',
    birthDate: new Date(),
    phone: '',
    countryPhone: {value:"0034", iso3166_a2:"es"},
    fileImage: null
  }
  const onSubmit = values => {
    console.log('Form data', values)
  }

  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
  ]
  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' }
  ]
  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' }
  ]

export const inputDefault = () => (  
    <FormControl initialValues={initialValues} onSubmit={onSubmit} >
        <FormField name={text("Text", "FormField")} label={text("Text", "FormField")} required type="text"/>
        <Button type="submit" variant="contained" style={{marginTop:30}}>Active</Button>
    </FormControl>  
);

export const inputTextarea = () => (  
    <FormControl initialValues={initialValues} onSubmit={onSubmit}>
        <FormField typeControl="textarea" name="areaText" required/>
        <Button type="submit" variant="contained" style={{marginTop:30}}>Active</Button>
    </FormControl>  
);

export const inputEmail = () => (  
    <FormControl initialValues={initialValues} onSubmit={onSubmit} >
        <FormField typeControl="email" name="email" label="email" required type="text"/>
        <Button type="submit" variant="contained" style={{marginTop:30}}>Active</Button>
    </FormControl>  
);

export const inputDate = () => (  
    <FormControl initialValues={initialValues} onSubmit={onSubmit}>
        <FormField typeControl="dateField" name="birthDate" required/>
        <Button type="submit" variant="contained" style={{marginTop:30}}>Active</Button>
    </FormControl>  
);

export const inputSelect = () => (  
    <FormControl initialValues={initialValues} onSubmit={onSubmit}>
        <FormField typeControl="select" name="selectOptions" required label="Seleccione un campo" options={dropdownOptions} />
        <Button type="submit" variant="contained" style={{marginTop:30}}>Active</Button>
    </FormControl>  
);

export const inputSelectPhone = () => (  
    <FormControl initialValues={initialValues} onSubmit={onSubmit}>
        <FormField typeControl="selectPhone" name="phone" required label="Telèfono" type="number" />
        <Button type="submit" variant="contained" style={{marginTop:30}}>Active</Button>
    </FormControl>  
);


export const inputSelectCountry = () => (  
    <FormControl initialValues={initialValues} onSubmit={onSubmit}>
        <FormField typeControl="selectCountries" name="country" required label="Nacionalidad"  />
        <Button type="submit" variant="contained" style={{marginTop:30}}>Active</Button>
    </FormControl>  
);


export const inputFile = () => (  
    <FormControl initialValues={initialValues} onSubmit={onSubmit}>
        <FormField typeControl="inputFile" name="fileImage" required label="Selecciona tu imagen" type="file" />
        <Button type="submit" variant="contained" style={{marginTop:30}}>Active</Button>
    </FormControl>  
);


export const inputCheckBox = () => (  
    <FormControl initialValues={initialValues} onSubmit={onSubmit}>
        <FormField typeControl="checkbox" name="checkboxOption" required label="Seleccione un item" type="checkbox" options={checkboxOptions}/>
        <Button type="submit" variant="contained" style={{marginTop:30}}>Active</Button>
    </FormControl>  
);

export const inputRadioButton = () => (  
    <FormControl initialValues={initialValues} onSubmit={onSubmit}>
        <FormField typeControl="radioGroup" name="radioOption"  label="Seleccione un item" type="radio" options={radioOptions}/>
        <Button type="submit" variant="contained" style={{marginTop:30}}>Active</Button>
    </FormControl>  
);