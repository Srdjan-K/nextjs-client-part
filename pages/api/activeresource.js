
import axios from "axios";


export default async function activateResource(request, response){

    const axiosRes = await axios.get(`${process.env.API_URL}/activeresource`);
    const resource = axiosRes.data;

    return response.send(resource);
}

