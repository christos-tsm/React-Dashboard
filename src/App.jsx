import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Metrics from "./pages/Metrics";
import Team from "./pages/Team";
import Settings from "./pages/Settings";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index path="/" element={<Home />} />
					<Route index path="/metrics" element={<Metrics />} />
					<Route index path="/team" element={<Team />} />
					<Route index path="/settings" element={<Settings />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
