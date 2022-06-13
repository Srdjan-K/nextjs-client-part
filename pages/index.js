import Layout from "components/Layout";
import Footer from "components/Footer";
import NewsLetter from "components/Newsletter";
import ResourceHighlight from "components/ResourceHighlight";
import ResourceList from "components/ResourceList";
// import resources from "./api/resources";

function Home({resources}) {

  return (
    <Layout>

      <ResourceHighlight   resources={resources.slice(0,resources.length)}></ResourceHighlight>
      
      <NewsLetter></NewsLetter>

      <ResourceList   resources={resources}></ResourceList>

      {/* { JSON.stringify(resources) } */}

      <Footer></Footer>

    </Layout>

)

}




export async function getServerSideProps(){

  const responseData = await fetch("https://nextjs-client-part-srdjan-k.vercel.app/api/resources");    // changed !!!
  const data = await responseData.json();

  return {
    props: {
      resources: data
    }
  }

}

export default Home;


