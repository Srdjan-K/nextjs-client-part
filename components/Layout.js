import Navbar from "components/Navbar";
import ActiveResource from "./ActiveResource";


const Layout = ({children}) => {

    return(
        <>
            <Navbar></Navbar>
            <ActiveResource></ActiveResource>
            {children}
        </>
    )
}

export default Layout;