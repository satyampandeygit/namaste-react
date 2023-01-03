# Igniting our App

Question: What is Hot Module Replacement(HMR)?

- Hot Module Replacement is way of exchanging modules in a running application and also adding or removing modules.
- HMR let us update changed modules without reloading the whole page.
- HMR working 
    - App code asks the HMR Runtime to check for the updates.
    - HMR checks the code and downloads the update in **Asynchronous** manner.
    - HMR tells the app code that an update is available.
    - Then app code tells HMR to apply the change.
    - HMR starts applying the updates in **Synchronous** manner.
    - For all this interaction app code does not need human interaction(you decide).
- HMR just refreshes file on auto save. 

Question: What are Bundlers?

- Bundlers is a development tool which takes our code, convert it into small, fewer and more performance efficient files which contains our code in minified form.
- Bundler reduces the size of our app.
- Helps in reducing latency of our code execution and helps to optimize our app for the web.
- Webpack has various advantages over existing bundlers but configuring webpack is hard, it requires a lot configuration.
- So, if we want to set up a new project with minimum configuration required just to get Hot Module Replacement, minfied bundling, and for any frontend library, Parcel can be used.

Question: What is Parcel?

- Parcel is a bundler. It performs all the functionalities of bundler but doesn't requires configuration like all other bundlers.
- Its easy to configure feature makes developer's life more easy.
- It bundles HTML, CSS, Javascript and Typescript too.

Question: What does '.parcel-cache' do?

- This folder is used by Parcel as a temproary cache directory when building your app for development and production.