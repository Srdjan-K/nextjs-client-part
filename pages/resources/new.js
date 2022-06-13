
import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";        // koristi se za navigaciju


const ResourceCreate = () => {

    const router = useRouter();

    const createResource = (formData) => {
        axios.post("/api/resources", formData)
            .then(_ => router.push("/") )
            .catch((error) => {alert(error?.response?.data)})
    }

    return(

        <Layout>

            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <h1 className="title"> ADD Resource </h1>
                        <ResourceForm onFormSubmit={createResource}></ResourceForm>
                    </div>
                </div>
            </div>
            
        </Layout>

    );

}


export default ResourceCreate;


