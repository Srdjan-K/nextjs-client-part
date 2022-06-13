import Layout from "components/Layout";
import Link from "next/link";
import Moment from "moment";
import axios from "axios";
import ResourceLabel from "components/ResourceLabel";

const ResourceDetail = (props) => {

    const activateResource = () => {
        
        axios.patch("/api/resources", {...props.resource, status: "active"})
            .then(_ => location.reload() )          // REFRESH the current page
            .catch(_ => alert("Can NOT activate the resource . . .") )

    }

    return (
        <Layout>
            <section className="hero ">
                    <div className="hero-body">
                    <div className="container">
        
                        <section className="section">
                            <div className="columns">
                                <div className="column is-8 is-offset-2">
                                <div className="content is-medium">

                                    <h1 className="title">
                                        <span style={{color:"brown"}}>Naziv : </span>{props.resource.title}
                                        <ResourceLabel status={props.resource.status}></ResourceLabel>
                                    </h1>

                                    <p> ID : {props.resource.id} </p>
                                    <p> Opis : {props.resource.description} </p>
                                    <p> Link : {props.resource.link} </p>
                                    <p> Preostalo Vreme Trajanja : {props.resource.timeToFinish} min </p>
                                    <p> Status : <ResourceLabel status={props.resource.status}></ResourceLabel> </p>
                                    <p> Prioritet : {props.resource.priority} </p>
                                    <h2 className="subtitle is-4"> Vreme Kreiranja : {Moment(props.resource.createdAt).format("DD.MM.YYYY HH:mm:ss")}</h2>
                                    {   
                                        props.resource?.updatedAt &&
                                        <h2 className="subtitle is-4"> Vreme Zadnje Izmene : {Moment(props.resource.updatedAt).format("DD.MM.YYYY HH:mm:ss")} </h2>
                                    }
                                    {   
                                        props.resource?.activationTime &&
                                        <p className="subtitle is-4"> Vreme Zadnje Aktivacije : {Moment(props.resource.activationTime).format("DD.MM.YYYY HH:mm:ss")} </p>
                                    }
                                   { 
                                        props.resource.status === "inactive" &&
                                        <>
                                            <Link   href={`/resources/${props.resource.id}/edit`}>
                                                <a className="button is-warning">
                                                    Update
                                                </a>
                                            </Link>
                                            <button 
                                                    onClick={activateResource} 
                                                    className="button is-success ml-1">
                                                Activate
                                            </button>
                                        </>
                                    }
                                    
                                </div>
                                </div>
                            </div>
                        </section>

                    </div>
                    </div>
            </section>
        </Layout>
    );

}





// --- FIRST SOLUTION -------------------------------------------
export async function getServerSideProps(context){

    const {query} = context;
    // console.log(query);

    const {params} = context;
    // console.log(params);
    
    // const dataResponse = await fetch(`${process.env.API_URL}/resources/${params.id}` );
    const dataResponse = await fetch(`${process.env.API_URL}/resources/${params.id}`);
    const data = await dataResponse.json();

    return {
        props: {
            resource: data,

        }
    }

}
// --- FIRST SOLUTION -------------------------------------------





export default ResourceDetail;



