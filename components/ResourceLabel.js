


const ResourceLabel = (props) => {

    return(
        <span className={`tag is-large is-black ml-4 resource-${props.status}`}>
            {
                props.status
            }
        </span>
    )

}



export default ResourceLabel;