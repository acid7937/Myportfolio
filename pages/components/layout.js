import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }){
    return(
        <div className="be-primary">
        <Header/>

        <div>{children}</div>
        <Footer/>
        </div>
    )
}