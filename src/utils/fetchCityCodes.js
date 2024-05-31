import axios from "axios";

const fetchCityCodes = async () =>{
    try 
    {
        
        const response = await axios.get("./cities.json");
        const cityCodes=response.data.map(city => city.cityCode);
        return cityCodes;


        

    }
     catch (error) 
     {
        console.error("An error occured when fetching country codes. ",error)
        return [];


        
    }


}

export default fetchCityCodes;


