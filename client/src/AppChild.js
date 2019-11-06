import React from "react";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

const AppChild = ({ data }) => {
    const [contentChoice, setContentChoice] = React.useState("most-recent");
    const [tweetsSelected, setTweetsSelected] = React.useState(true);
    const [newsSelected, setNewsSelected] = React.useState(true);

    return (
        <div className="App">
            <Header
                contentChoice={contentChoice}
                setContentChoice={setContentChoice}
                tweetsSelected={tweetsSelected}
                setTweetsSelected={setTweetsSelected}
                newsSelected={newsSelected}
                setNewsSelected={setNewsSelected}
            />
            <Content
                contentChoice={contentChoice}
                tweetsSelected={tweetsSelected}
                newsSelected={newsSelected}
                data={data}
            />
            <Footer />
        </div>
    );
};

export default AppChild;
