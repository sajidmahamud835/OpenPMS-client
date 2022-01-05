import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Pricing from "./components/Pricing/Pricing";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
	return (
		<div className>
			<Router>
				<Switch>
					<Route exact path="/">
						<Header />
						<Home />
						<Footer />
					</Route>
					<Route path="/home">
						<Header />
						<Home />
						<Footer />
					</Route>
					<Route path="/about">
						<Header />
						<About />
						<Footer />
					</Route>
					<Route path="/contact">
						<Header />
						<Contact />
						<Footer />
					</Route>
					<Route path="/faq">
						<Header />
						<FAQ />
						<Footer />
					</Route>
					<Route path="/pricing">
						<Header />
						<Pricing />
						<Footer />
					</Route>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route exact path="*">
						<Header />
						<NotFound />
						<Footer />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
