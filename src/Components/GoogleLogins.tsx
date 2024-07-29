import { GoogleLogin } from "@react-oauth/google"
import { decodeJwt } from "jose"
// import { useNavigate } from "react-router-dom"

function GoogleLogins({setLogin}:{setLogin:any}) {
  // const navigate=useNavigate()
  
  return (
    <div>
    
        <GoogleLogin
        onSuccess={credentialResponse=>{
          console.log('credenttttttttioal',credentialResponse)
          const {credential} = credentialResponse
          const payload = credential ? decodeJwt(credential) :undefined
          console.log(payload)
          if(payload){
             console.log('successss payload',payload);
             setLogin(true)
              // navigate('/')
            
          }
         }}
         onError={() => {
          console.log('An error occurred');
        }}
          />
    </div>
  )
}

export default GoogleLogins