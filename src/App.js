import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
