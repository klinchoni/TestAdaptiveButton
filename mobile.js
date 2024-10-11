// mobile.js
const mobileStyles = `
body {
    font-size: 14px;
}

footer {
    width: 100%;
    padding: 10px;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mobileStyles;
document.head.appendChild(styleSheet);
