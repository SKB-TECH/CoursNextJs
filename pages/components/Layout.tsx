import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="content">
            <Navbar />
            {
                children
            }
            <Footer />
        </section>
    );
}
 
export default Layout;