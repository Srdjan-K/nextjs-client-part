import Link from "next/link";
import Moment from "moment";
import ResourceLabel from "./ResourceLabel";


const ResourceHighlight = ({resources}) => {

    return(
        <section className="hero ">
            <div className="hero-body">
            <div className="container">
                

                { resources.map( (resource) => {
                    return(
                        <section key={resource.id} className="section">
                            <div className="columns">
                                <div className="column is-8 is-offset-2">
                                <div className="content is-medium">
                                    <h1 className="title">
                                        <span style={{color:"brown"}}>Naziv : </span>{resource.title}
                                        <ResourceLabel status={resource.status}></ResourceLabel>
                                    </h1>
                                    <p> ID : {resource.id}</p>
                                    <p> Opis : {resource.description}</p>
                                    <p> Link : {resource.link}</p>
                                    <p> Preostalo Vreme Trajanja : {resource.timeToFinish} min</p>
                                    <p> Status : {resource.status}</p>
                                    <p> Prioritet : {resource.priority} </p>
                                    <h2 className="subtitle is-4"> Vreme Kreiranja : {Moment(resource.createdAt).format("LLL")}</h2>
                                    {   
                                        resource?.updatedAt &&
                                        <h2 className="subtitle is-4"> Vreme Zadnje Izmene : {Moment(resource.updatedAt).format("DD.MM.YYYY HH:mm:ss")} </h2>
                                    }
                                    {   
                                        resource?.activationTime &&
                                        <p className="subtitle is-4"> Vreme Zadnje Aktivacije : {Moment(resource.activationTime).format("DD.MM.YYYY HH:mm:ss")} </p>
                                    }
                                    
                                    <Link href={`/resources/${resource.id}`}>
                                        <a className="button is-link">
                                            Details
                                        </a>
                                    </Link>
                                    
                                </div>
                                </div>
                            </div>
                        </section>
                    )
                })}


            </div>
            </div>
      </section>

    );

}

export default ResourceHighlight;