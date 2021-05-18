import { Route, Switch } from "react-router-dom";
import "./App.css";
import Counter from "./UI/Counter/Counter";
import Header from "./UI/Header/Header";
import Main from "./UI/Main/Main";

function App() {

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path={'/'} render={() => <Main/>} />
				<Route path={'/counter'} render={() => <Counter/>} />
			</Switch>
		</div>
	);
}

export default App;
