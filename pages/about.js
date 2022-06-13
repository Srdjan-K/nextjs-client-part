import Layout from "components/Layout";

const MyTest = (props) => {

    return(
        <>
            <h1>My Test Component !</h1>
            {props.children}
        </>
    )

}


function About(){
    return(
        <Layout>
            <div style={{background: "none", border: "solid lightgreen 0px"}} > About Page </div>
            <hr></hr>
            <MyTest>
                <h4>Text with h4</h4>
                <h5>Text with h5</h5>
                <h6>Text with h6</h6>
            </MyTest>
        </Layout>
    );
}

export default About;