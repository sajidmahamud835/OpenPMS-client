import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FAQ from "./components/FAQ/FAQ";
import Pricing from "./components/Pricing/Pricing";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/faq">
						<FAQ></FAQ>
					</Route>
					<Route path="/pricing">
						<Pricing></Pricing>
					</Route>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route exact path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
