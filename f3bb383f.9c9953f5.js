(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(3),a=(n(0),n(104));const r={id:"what-is-mint-react",title:"Mint React",sidebar_label:"Getting Started"},s={unversionedId:"frontend/mint-react/what-is-mint-react",id:"frontend/mint-react/what-is-mint-react",isDocsHomePage:!1,title:"Mint React",description:"version license Chat",source:"@site/docs\\frontend\\mint-react\\getting-started.md",slug:"/frontend/mint-react/what-is-mint-react",permalink:"/mint/docs/frontend/mint-react/what-is-mint-react",editUrl:"https://github.com/antick/mint/edit/main/docs/docs/frontend/mint-react/getting-started.md",version:"current",sidebar_label:"Getting Started",sidebar:"someSidebar",previous:{title:"Mint Express",permalink:"/mint/docs/backend/mint-express/what-is-mint-express"}},c=[{value:"Features",id:"features",children:[]},{value:"Quick start",id:"quick-start",children:[]},{value:"Directory Structure",id:"directory-structure",children:[]},{value:"Reporting Issues",id:"reporting-issues",children:[]}],o={toc:c};function b({components:e,...t}){return Object(a.b)("wrapper",Object(i.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"https://img.shields.io/badge/version-0.1.0-teal.svg",alt:"version"}))," ",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"https://img.shields.io/badge/license-MIT-teal.svg",alt:"license"}))," ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://discord.gg/6jgSTR2pAF"}),Object(a.b)("img",Object(i.a)({parentName:"a"},{src:"https://img.shields.io/badge/chat-on%20discord-7289da.svg",alt:"Chat"})))),Object(a.b)("p",null,"A beautifully crafted boilerplate for starting a React JS and Tailwind css project using Mint Express as backend API."),Object(a.b)("p",null,"Mint-React is for those who want to build their apps in MERN stack. Mint Stack\nis divided in different repositories for backend and frontend respectively. This\none is for the React frontend. Mint-React gives you some common functionalities\nout-of-the-box and insists on following the proper coding standards with ESLint.\nMint-React has enough features to get you started on any project that you plan to\nbuild on MERN stack."),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Login and Registration"),Object(a.b)("li",{parentName:"ol"},"Forgot Password"),Object(a.b)("li",{parentName:"ol"},"Public and private routes"),Object(a.b)("li",{parentName:"ol"},"Robust token authentication"),Object(a.b)("li",{parentName:"ol"},"Modular architecture"),Object(a.b)("li",{parentName:"ol"},"Preconfigured Tailwind CSS"),Object(a.b)("li",{parentName:"ol"},"Pre-configured ESLint"),Object(a.b)("li",{parentName:"ol"},"Redux with hooks"),Object(a.b)("li",{parentName:"ol"},"Jest for unit tests with coverage report"),Object(a.b)("li",{parentName:"ol"},"Cypress for end-to-end testing")),Object(a.b)("h2",{id:"quick-start"},"Quick start"),Object(a.b)("p",null,"Clone the repo:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"git clone https://github.com/antick/mint-react.git"),"."),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"npm i")," to install all the dependencies."),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"npm watch:css")," and ",Object(a.b)("inlineCode",{parentName:"p"},"npm start")," to watch the files and start the server."),Object(a.b)("h4",{id:"npm-buildcss"},Object(a.b)("inlineCode",{parentName:"h4"},"npm build:css")),Object(a.b)("p",null,"Creates a build with updated style.css from index.css."),Object(a.b)("h4",{id:"npm-watchcss"},Object(a.b)("inlineCode",{parentName:"h4"},"npm watch:css")),Object(a.b)("p",null,"Watch the changes done in the src/index.css and build them in public/style.css"),Object(a.b)("h4",{id:"npm-start"},Object(a.b)("inlineCode",{parentName:"h4"},"npm start")),Object(a.b)("p",null,"Runs the app in the development mode."),Object(a.b)("p",null,"Open ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")," to view it in the browser."),Object(a.b)("h4",{id:"npm-run-build"},Object(a.b)("inlineCode",{parentName:"h4"},"npm run build")),Object(a.b)("p",null,"Builds the app for production to the ",Object(a.b)("inlineCode",{parentName:"p"},"build")," folder."),Object(a.b)("h4",{id:"docker"},"Docker"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"# run docker container\nnpm run docker\n\n# run all tests in a docker container\nnpm run docker:test\n")),Object(a.b)("h2",{id:"directory-structure"},"Directory Structure"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"|-- public\n|-- src\n  |-- assets\n    |-- styles\n  |-- config\n  |-- modules\n    |-- app\n      |-- __tests__\n      |-- components\n    |-- auth\n      |-- __tests__\n      |-- components\n      |-- hooks\n      |-- reducers\n      |-- utilities\n    |-- shared\n      |-- __tests__\n      |-- actions\n      |-- components\n      |-- hooks\n      |-- reducers\n      |-- utilities\n    |-- user\n      |-- __tests__\n      |-- actions\n      |-- components\n      |-- reducers\n")),Object(a.b)("h2",{id:"reporting-issues"},"Reporting Issues"),Object(a.b)("p",null,"We use GitHub Issues as the official bug tracker for the Mint React. Here\nare some advises for our users that want to report an issue:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Make sure that you are using the latest version of the Mint React."),Object(a.b)("li",{parentName:"ol"},"Provide us reproducible steps for the issue that you encounter, so it's easier for us to fix that bug.")))}b.isMDXComponent=!0}}]);