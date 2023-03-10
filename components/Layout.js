import Footer from "./footer";
import Nav from "./Nav";

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <main>{children}</main>
            <Footer />
        </>
    )
}