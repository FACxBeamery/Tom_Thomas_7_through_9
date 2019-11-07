import React from "react";
import { Card } from "./Card/Card";

import styles from "./Content.module.css";


const Content = ({ contentChoice, tweetsSelected, newsSelected, data }) => {
    const [mockNews, mockTweet] = data;

    mockNews.articles.forEach((elem) => {
        elem.mediaType = "news";
        elem.dateStandard = new Date(elem.publishedAt).toUTCString();
    });

    mockTweet.statuses.forEach((elem) => {
        elem.mediaType = "tweet";
        elem.dateStandard = new Date(elem.created_at).toUTCString();
    });

    const filteredMedia = [];

    if (tweetsSelected) {
        filteredMedia.push(...mockTweet.statuses);
    }
    if (newsSelected) {
        filteredMedia.push(...mockNews.articles);
    }

    if (filteredMedia.length === 0) {
        return (
            <>
                <p className={styles["no-content"]}>
                    Please select the content you'd like to see
				</p>
            </>
        );
    }

    filteredMedia.sort((a, b) => {
        const dateA = new Date(a.dateStandard);
        const dateB = new Date(b.dateStandard);
        return dateB - dateA;
    });

    // const cardsToRender = filteredMedia.map((element) => {
    // 	console.log("inside cardsToRender, logging each card: ", element);
    // 	return <Card cardData={element} />;
    // });

    const cardsToRender =
        contentChoice === "most-recent"
            ? filteredMedia.map((element) => {
                return (
                    <Card
                        key={Date.parse(element.dateStandard)}
                        cardData={element}
                    />
                );
            })
            : filteredMedia
                .filter((element) => element.favourite === true)
                .map((element) => {
                    return (
                        <Card
                            key={Date.parse(element.dateStandard)}
                            cardData={element}
                        />
                    );
                });

    return (
        <div className={styles["content"]} data-testid="content-container">
            {[cardsToRender]}
        </div>
    );
};

export default Content;
