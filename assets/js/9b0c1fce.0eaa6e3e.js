"use strict";(self.webpackChunkrn_tdd=self.webpackChunkrn_tdd||[]).push([[533],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3119:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},s="Fetching Data from an API",p={unversionedId:"tdd-recipes/fetching-data",id:"tdd-recipes/fetching-data",isDocsHomePage:!1,title:"Fetching Data from an API",description:"I recommend doing the design first and then getting the data from the API. This way you can concentrate on the design with less edge cases, and when you call your API you can make sure quickly that you are getting the right data.",source:"@site/docs/tdd-recipes/fetching-data.md",sourceDirName:"tdd-recipes",slug:"/tdd-recipes/fetching-data",permalink:"/react-native-tdd/docs/tdd-recipes/fetching-data",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Designing a Component",permalink:"/react-native-tdd/docs/tdd-recipes/designing-component"},next:{title:"Calling a Native Library",permalink:"/react-native-tdd/docs/tdd-recipes/calling-native-library"}},l=[{value:"Writing your acceptance test",id:"writing-your-acceptance-test",children:[]},{value:"If you use the adapter pattern",id:"if-you-use-the-adapter-pattern",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fetching-data-from-an-api"},"Fetching Data from an API"),(0,o.kt)("p",null,"I recommend doing the design first and then getting the data from the API. This way you can concentrate on the design with less edge cases, and when you call your API you can make sure quickly that you are getting the right data."),(0,o.kt)("h2",{id:"writing-your-acceptance-test"},"Writing your acceptance test"),(0,o.kt)("p",null,"As an example, let's say we're developing a HackerNews app.\nWe've already developed the design for 1 link with fake data, and we want to display the real data now."),(0,o.kt)("p",null,"Once again, we are going to ",(0,o.kt)("a",{parentName:"p",href:"../tdd-intro/getting-started#figure-out-what-to-test"},"reverse the setup / given / when / then"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Then (what do I want to see) -> I want to see that the names of the links are the one coming from the API"),(0,o.kt)("li",{parentName:"ul"},"When (the trigger) -> The homepage is loaded"),(0,o.kt)("li",{parentName:"ul"},"Given (what state must I be before having the trigger) -> I am on the home page"),(0,o.kt)("li",{parentName:"ul"},"Setup (the pre-requisites for the given) -> I need to mock API calls and mount the home page")),(0,o.kt)("p",null,"For example, here is the code for such a test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import React from "react";\nimport { render, waitFor } from "react-native-testing-library";\nimport { HackerNewsHomePage } from "./HackerNewsHomePage";\nimport nock from "nock";\n\nconst mockTopStoriesList = (list: number[]) => {\n  return nock("https://hacker-news.firebaseio.com/")\n    .get("/v0/topstories.json")\n    .reply(200, JSON.stringify(list));\n};\n\nconst mockItem = (id: number, title: string) => {\n  return nock("https://hacker-news.firebaseio.com/")\n    .get(`/v0/item/${id}.json`)\n    .reply(\n      200,\n      `{"by":"myth_drannon","descendants":8,"id":${id},"kids":[27785045,27784442,27784809,27784937,27784749,27783786],"score":101,"time":1625837604,"title":"${title}","type":"story","url":"https://spritestack.io/"}`\n    )\n    .persist();\n};\n\ndescribe("HackerNewsHomePage", () => {\n  describe("page component", () => {\n    it("fetches news from the API and toggles the button", async () => {\n      mockTopStoriesList([27783490, 27783491]);\n      mockItem(27783490, "SpriteStack Voxel Editor");\n      mockItem(27783491, "Some other story");\n\n      const page = render(<HackerNewsHomePage />);\n\n      // Initial rendering\n      await waitFor(() => {\n        expect(page.queryByText("SpriteStack Voxel Editor")).not.toBeNull();\n        expect(page.queryByText("Some other story")).not.toBeNull();\n      });\n    });\n  });\n});\n')),(0,o.kt)("p",null,"In this example I used ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nock/nock"},(0,o.kt)("inlineCode",{parentName:"a"},"nock"))," to mock API calls"),(0,o.kt)("h2",{id:"if-you-use-the-adapter-pattern"},"If you use the adapter pattern"),(0,o.kt)("p",null,"A good practice in architecture is to isolate your application code from your API. This is commonly achieved with the adapter pattern. That way, if your API changes (e.g. a field in an object), you only have one change to make in your app code."),(0,o.kt)("p",null,"If you are using the adapter pattern, here is how to develop a new fetch from an API."),(0,o.kt)("p",null,"TODO :)"))}d.isMDXComponent=!0}}]);