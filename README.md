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

## What is Strapi?
Strapi is a flexible, customizable, headless CMS built with Node.js.

It offers a user-friendly interface for content management while allowing developers to build and design the front end independently. 

As a headless CMS, Strapi separates the content management from the presentation layer, delivering content via APIs.

**Powerful Combination**
Next.js and Strapi together create a robust solution for building dynamic websites. 

Next.js handles the front with server-side rendering capabilities, while Strapi manages the backend content.

**Key Benefits**

- **Improved SEO and Performance**: Next.js's server-side rendering capabilities, combined with Strapi's content management, enhance SEO and website speed. 

- **Flexibility and Customization**: Strapi's adaptability complements Next.js's versatility, allowing developers to create highly customized web applications and allowing for complete control over both the content structure and the frontend presentation.

- **API-First Approach**: Strapi provides a robust, out-of-the-box API that makes fetching and managing content in your Next.js application easy. 

This API-first approach enables you to build scalable and efficient web applications.

- **Developer-Friendly**: Strapi and Next.js are built with JavaScript/Node.js, providing a consistent development experience. This familiarity can lead to increased productivity and easier maintenance.

## What's New in Strapi 5
Strapi 5 introduces several powerful features to enhance content management and development efficiency.

- **Draft & Publish**: with a new user-friendly interface, Strapi 5 now separates Draft and Published content into distinct tabs, allowing you to save and publish content in a single action. This feature reduces the risk of publishing errors and makes collaboration smoother than ever.

- **Content History**: Strapi 5 allows you to quickly revert to previous versions of your content, helping you avoid data loss, inefficiency, and workflow disruptions. If you ever need to go back to an earlier version of a page, it's now just a click away.

- **100% TypeScript**: Strapi 5 is now entirely written in TypeScript, offering the benefits of type safety and easier maintainability. This means more robust code, quicker bug detection, and a smoother experience for collaborative projects.

- **Vite Bundling**: Strapi 5 offers Vite bundling support, which speeds up build times. This enhancement improves performance, making your development process more efficient.

- **Plugin CLI**: Strapi 5 introduces an intuitive Plugin CLI, providing a suite of commands that make plugin development more accessible than ever. This tool simplifies creating and managing plugins, saving developers valuable time.

- **New API Format**: Strapi 5's new API format is cleaner and more intuitive, simplifying your interactions with the CMS. It also reduces payload sizes, leading to faster and more efficient data handling.
Strapi 5 is your go-to open-source headless CMS for modern API creation and seamless content collaboration. It makes coding and publishing more intuitive.


## Getting Started With The Project Demo

You can check out the [following video](https://www.youtube.com/watch?v=RSdRM4gw218) or follow the steps outlined below.

**Step 1**: clone the project
The first step is to clone the project to your local computer.

I will be using GitHub CLI for this example. Let's start by cloning the project with the following command.

``` bash
  git clone https://github.com/PaulBratslavsky/strapi-5-next-js-starter-project.git
```
**Step 2**: run the setup script

Once you have the project on your local machine, let's install the project dependencies and seed them with example data.

We will run the following command from the root of our project.

``` bash
  yarn setup
```

You can check out the `package.json` file for more details on what the script will do.

If you have any questions about the project, please leave a comment or stop by Strapi's "open office" hours Monday through Friday at 12:30 PM CST. 
