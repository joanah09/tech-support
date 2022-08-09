import React, {createContext, useContext, useState} from "react";

//Contact Form
const ContactFormData = createContext()
const ContactSubmit = createContext()
const ContactChange = createContext()

export function useFormData() {
    return useContext(ContactFormData)
}
export function useHandleSubmit() {
    return useContext(ContactSubmit)
}

export function useOnChange() {
    return useContext(ContactChange)
}

export function ContactFormInfo({ children }) {
    const initialState = {
        name:"", 
        email: "",
        number: "",
        message: "",
    }
    const [formData, setFormData] = useState(initialState)
    function handleChange(event) {
        const {name, value} = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        setFormData({...initialState})
    }

    return (
        <ContactSubmit.Provider value={handleSubmit}>
            <ContactChange.Provider value={handleChange}>
                <ContactFormData.Provider value={formData}>
                    {children} 
                </ContactFormData.Provider>
            </ContactChange.Provider>
        </ContactSubmit.Provider>
    )
}

