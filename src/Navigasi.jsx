import React from "react";
import { BrowserRouter, Link, Routes, Route} from "react-router-dom";

function HomePage() {
    return <p>This is home page</p>
}

function AboutPage() {
    return <p>This is About Page</p>
}

function FaqPage() {
    return <p>This is FAQ Page</p>
}


function LinkManual({target, navigasi, children}) {

    return(
        <a href={target} 
            onClick={(e) => {
                e.preventDefault();
                navigasi(target)
            }}
        >{children}</a>

    );
}

class Navigasi extends React.Component {
    constructor(){
        super();
        this.state = {
            page : "/"
        }
        this.navigateHandler = this.navigateHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);

    }

    navigateHandler(target){

        this.setState ={
            page : target,
        }
        console.log(this.state.page);
    }

    changeStateHandler(target) {
        this.setState({
            page : target,
        })
        console.log("klik", this.state.page);
        
    }

    render() {
        return (
            <BrowserRouter>
                <header>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                    </Routes>
                    {/* {
                    this.state.page === "/" && <HomePage/> ;
                    this.state.page === "/about" && <AboutPage/> ; 
                    this.state.page === "/faq" && <FaqPage/>;
                    } */}
                </main>
            </BrowserRouter>
        );
    }
}




export default Navigasi;