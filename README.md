# Getting Started With Strapi 5 and Next.js 15 

Have you ever wondered how well Strapi and Next.js work together? You can take it for a test run with this project.

It is open source, and you can use it to jump-start your project.

It is built with Next.js 15 and Strapi 5 

## What is Next.js?
Next.js is a framework built on top of React that provides additional features and optimizations for web development. 

It offers tools and conventions that make creating high-performance, SEO-friendly web applications easier.

**Key Features**
- App Router allows you to create and manage routes in your application easily and intuitively.

- Server Components allow parts of your application to be rendered on the server, which offers several benefits: Reduced client-side JavaScript, leading to improved performance and security, as sensitive operations can be kept on the server.

- Server Actions are a new feature that allows you to define and execute server-side code directly from your components, enabling Seamless integration of server-side logic within your application.

You can learn more about Next.js [here](https://nextjs.org/docs)





## Getting Started With The Project Demo

The first step is to clone the project to your local computer and run the setup script.

I will be using GitHub CLI for this example. Let's start by cloning the project with the following command.

``` bash
  git clone https://github.com/PaulBratslavsky/strapi-5-next-js-starter-project.git
```

Once you have the project in you local machine, let's install the project dependencies and seed with example data.

We will run the following command from the root of our project.

``` bash
  yarn setup
```

You can checkout the `package.json` file for more details on what the script will do.

