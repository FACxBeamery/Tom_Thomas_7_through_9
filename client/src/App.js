import React from "react";
import AppChild from "./AppChild";
import axios from "axios";

const App = () => {
	const [data, setData] = React.useState([]);
	React.useEffect(() => {
		async function getMessage() {
			try {
				const response = await axios.get("/media");
				setData(response.data);
			} catch (err) {}
		}
		getMessage();
	}, []);
	return <AppChild data={data} />;
};

export default App;
