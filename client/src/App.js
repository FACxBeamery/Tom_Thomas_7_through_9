import React from "react";
import mockNews from "./mockNews";
import mockTweet from "./mockTweet";
import AppChild from "./AppChild";


const App = () => {
    const [data, setData] = React.useState([mockNews, mockTweet]);
    React.useEffect(() => {
        async function getMessage() {
            try {
                const response = await fetch("/media");
                console.log("response :", response);
                setData(response.data);
            } catch (err) {
                console.log("Error inside useEffect.");
                console.log(err);
            }
        }
        getMessage();
    }, []);
    console.log("data:", data);
    return <AppChild data={data} />;
};

export default App;
