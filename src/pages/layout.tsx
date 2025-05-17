import Footer from "@/comps/footer";
import Navbar from "@/comps/navbar";
const Layout = ({children}:any) => {
    return ( <>
    <Navbar/>
    {children}
    <Footer/>
    </> );
}
 
export default Layout;