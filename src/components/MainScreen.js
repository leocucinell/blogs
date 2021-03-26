import React from "react";

import BlogList from "./BlogList";

const MainScreen = () => {
    return (
        <div className="container">
            <h1>JsonPlaceholder-blog</h1>
            <BlogList />
        </div>
    );
};

export default MainScreen;