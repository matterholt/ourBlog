# Build content

Making a record of th items and issues that I had to learn when building this project

1. NEXT.js is sever rendered and can not follow the patters as client rendered (naturally). This being known sanity.io has a package to be installed to help make the request to the sanity api. npm package.

2. How to connect and setup api using next

3. Sanity has blockContent for data entries this allow the user to have bold, italic and other attributes inside the text. Parsing them out to the screen is a bit much it and object with arrays and types and more arrays. Sanity has a hook that can be npm installed called "block-content-to-react ". There is also some for other framework and good ole HTML. These is easy take the block content and get it to a readable format the fornt end UI.

-> REferanc
https://www.inkoop.io/blog/setup-eslint-for-react-with-prettier-pre-commit-and-vscode/

## References

Sainty's starter code repo, use as a reference for project[sanity-template-nextjs-blog-comments](https://github.com/brob/sanity-template-nextjs-blog-comments/blob/5a92eabbd07e2b7fe6b20de72cd1805c049db21a/template/pages/_document.js)

Write up about the creation of commenting engine with next and Sanity. by Bryan Robinson [How to Create a Commenting Engine with Next.js and Sanity](https://css-tricks.com/how-to-create-a-commenting-engine-with-next-js-and-sanity/)

Vercel code example for setting up [cms-sanity](https://github.com/vercel/next.js/tree/canary/examples/cms-sanity)

A 2019 Sanity blog post using Next.js and Sanity. Built using old NEXT.JS 9.0.3, S[Tutorial: Make a blog with Next.js, React and Sanity](https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js#3-make-a-dynamic-page-template-9e1fb1526b04)

A reference for the proptypes
[referance proptype](https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/)
