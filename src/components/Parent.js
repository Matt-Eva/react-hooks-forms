import React, {useState} from "react";
import Form from "./Form";
import DisplayData from "./DisplayData"


function Parent(){
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
  
    const firstNameChange = (e) =>{
      setFirstName(e.target.value)
    }
  
    const lastNameChange = (e) =>{
      setLastName(e.target.value)
    }

    return(
        <>
        <Form firstName={firstName} lastName={lastName}
         handleFirstNameChange={firstNameChange} handleLastNameChange={lastNameChange}/>
         <DisplayData firstName={firstName} lastName={lastName}/>
        </>
    )

}

export default Parent;