

import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm";
import axios from "axios";
import { useRouter } from "next/router";

const ResourceEdit = ({resource}) => {

    const router = useRouter();
    
    const updateResource = (formData) => {
        axios.patch("/api/resources", formData)
            .then(_ => router.push(`/resources/${resource.id}`) )
            .catch((error) => {alert(error?.response?.data)})
    }

    return(
        <Layout>
            
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        
                        <h1 className="title"> Edit Resource </h1>
                        <ResourceForm 
                            initialData={resource}
                            onFormSubmit={updateResource}
                        >
                            
                        </ResourceForm>

                    </div>
                </div>
            </div>
            
        </Layout>
    )

}



export async function getServerSideProps({params}){
    
    const dataResponse = await fetch(`${process.env.API_URL}/resources/${params.id}`);
    const data = await dataResponse.json();

    return {
        props: {
            resource: data,
        }
    }

}


export default ResourceEdit;
