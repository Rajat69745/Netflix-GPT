

export const checkValidDataSignIn=(email, password)=>{

    const isEmailValid=   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)

    const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    
// const isNameValid=   /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(userName)

// if(!isNameValid) return "Enter Name"
    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "A password contains a combination of uppercase and lowercase letter and number are required"

    return null

}




export const checkValidDataSignUp=(email, password, userName)=>{

    const isEmailValid=   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)

    const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    
const isNameValid=   /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(userName)

if(!isNameValid) return "Enter Name"
    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "A password contains a combination of uppercase and lowercase letter and number are required"

    return null

}