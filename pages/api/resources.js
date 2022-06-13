
import axios from "axios";

export default async function(request, response) {

    if( request.method === "GET" ){
        const dataRes = await fetch(`${process.env.API_URL}/resources`);
        const data = await dataRes.json();

        return response.send(data);
    }
    
    if( request.method === "POST" || request.method === "PATCH" ){
        // console.log(request.body);
        const { id, title, description, link, priority, timeToFinish } = request.body;

        if( !title || !description || !link || !priority || !timeToFinish ){
            return response.status(422).send("Podaci nedostaju ... - End Point Client STRANA");
        }

        const url = request.method === "POST"
            ? `${process.env.API_URL}/resources`
            : `${process.env.API_URL}/resources/${id}`;

        try {
            // axios.post(`${process.env.API_URL}/resources`, request.body);
            // return response.send("Podaci su primljeni ! - End Point Client STRANA");
            const axiosResponse = await axios[request.method.toLowerCase()](url, request.body);
            return response.send(axiosResponse.data);
        } catch (error) {
            return response.status(422).send("Data cannot be stored !");
        }

    }


}

