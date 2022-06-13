import Link from "next/link";
import { useState , useEffect } from "react";
import axios from "axios";
import moment from "moment";


const ActiveResource = () => {

    const [ resource, setResource ] = useState({});
    const [ seconds, setSeconds ] = useState();

    useEffect(() => {

        async function fetchResource() {

            const axiosRes = await axios.get("/api/activeresource");
            const resource = axiosRes.data;

            if( resource ){
                
                const timeToFinish = parseInt(resource.timeToFinish, 10);
                const elapsedTime = moment().diff(moment(resource.activationTime), "seconds");

                const updatedTimeToFinish = (timeToFinish*60) - elapsedTime;

                if( updatedTimeToFinish >= 0 ){
                    resource.timeToFinish = updatedTimeToFinish;
                    setSeconds(updatedTimeToFinish);
                }

                console.log(updatedTimeToFinish);
                
                setResource(resource);

            }
        }


        fetchResource();


    }, []);

    useEffect(() => {

        const interval = setInterval(() => {
            setSeconds(seconds - 1);
        }, 1000);

        if( seconds < 0 ){          // if I am on that page when seconds runs out
            clearInterval(interval);
        }

        return () => {              // unmount the component - if I go on some other component (page), before the seconds runs out
            clearInterval(interval);
        }

    }, [seconds]);


    const completeResource = () => {
        axios.patch("/api/resources", {...resource, status: "completed"})
            .then(_ => location.reload() )          // REFRESH the current page
            .catch(_ => alert("Can NOT COMPLETE the resource . . .") )
    }


    const hasResource = resource && resource.id;

    return(
        <div className="active-resource">
            <h1 className="resource-name">
                {hasResource ? resource.title : "No Active Resource"} 
            </h1>
            <div className="time-wapper">
                { hasResource && 
                    (
                        seconds > 0 ?
                        <div className="elapsed-time">
                            <h2>
                                {seconds}
                            </h2>
                        </div>
                        :
                        <div className="elapsed-time">
                            <h2>
                                <button 
                                    className="button is-success"
                                    onClick={completeResource}
                                > 
                                    Click And Done !
                                </button>
                            </h2>
                        </div>
                    )
                }
            </div>

            {
                hasResource ?
                <Link href={`/resources/${resource.id}`}>
                    <a className="button">
                        Go To Resource
                    </a>
                </Link>
                :
                <Link href="/">
                    <a className="button">
                        Go To Resources
                    </a>
                </Link>

            }

        </div>
    );

}


export default ActiveResource;