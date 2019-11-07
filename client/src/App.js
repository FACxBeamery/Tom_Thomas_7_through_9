import React from "react";
import mockNews from "./mockNews";
import mockTweet from "./mockTweet";
import AppChild from "./AppChild";

// const data = [mockNews, mockTweet];

const App = () => {
    let data;
    React.useEffect(() => {
        async function getMessage() {
            try {
                const response = await fetch("/media");
                data = response.data;
            } catch (err) {
                console.log(err)
            }
        }
        getMessage();
    }, [])

    return <AppChild data={data} />;
};

export default App;
