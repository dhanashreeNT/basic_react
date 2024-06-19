

function NavBar(){
    return(
        
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Career</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>
    </div>
</nav>
    )
};
function MainComponent(){
    return(
        <h2>Hello I am learning react</h2>
    )
}
const Nav = <nav>
    <h1>Aayush</h1>
    <ul><li>Pricing</li>
    <li>About</li>
    <li>Contact</li></ul>
</nav>
const info = (
    <div>
        <img src="./react.png" width="300px"></img>
        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was Originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps,including mobile apps </li>
        </ul>
    </div>)
ReactDOM.render(info,document.getElementById("root"))

function ReactReasons() {
    return(
        <ul>
            <ol>Excited to learn react</ol>
            <ol>Job oriented</ol>
            <ol>Fast website development</ol>
            <ol>Open source</ol>
        </ul>
    )
}

ReactDOM.render(<ReactReasons/>,document.getElementById("root"))
// ReactDOM.render(<ul><li>Ram</li><li>Sham</li></ul>,document.getElementById("root"))