const heading = React.createElement(
    "h1",
    {},
    "Hello World using React"
);

const heading2 = React.createElement(
    "h2",
    {},
    "Another heading"
);

const container = React.createElement(
    "div",
    {
        id: "container"
    },
    [heading,heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);