export const BASE_URL = "https://strangers-things.herokuapp.com/api/";
export const COHORT_NAME = "2202-ftb-et-web-pt";
export const API_URL = BASE_URL + COHORT_NAME;

export const fetchUserInfo = async (localToken) => {
  const response = await fetch(`${API_URL}/users/me`,{
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localToken}`
      }
      })
      const result = await response.json()
      return result.data
}

export async function registerUser (username, password){
    try { 
      const response = await fetch(`${API_URL}/users/register`,{ 
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ user: { 
        username: username, 
        password: password
      } })
      
    })
     const UnpackedResponse = await response.json()
     console.log(" This is what is looks like",UnpackedResponse)
     return UnpackedResponse.data
    } catch (error) { 
      console.log(error)
  }
}
