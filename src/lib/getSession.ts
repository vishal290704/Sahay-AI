import { cookies } from "next/headers";
import { scalekit } from "./scalekit";

export async function getSession() {
  const session = await cookies();
  const token = session.get("access_token")?.value;
  if(!token){
    return null
  }
  try {
    const result = await scalekit.validateToken(token!)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
  
}

//hame login button ko icon me change krna h jab user login ho jaye.
// iske liye hume email ka first letter ya image dikhana h login button k jagah.
//callback me session save h user ka jab wo login hojaye, to use callback ke session se access token le aayenge.
//uss access_token se value lelenge
//fir result variable me scalekit ke thorigh token save kr lenge
