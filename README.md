# Card game

Demo: https://modest-turing-beec0b.netlify.app/

## Introduction

A very small "card game" proof of concept, built with technologies I currently use in my daily frontend business.

### Technologies

-   React 17
-   TailwindCSS 2
-   Vite

### Motivation

React and similiar frameworks are extremely useful when developing highly interactive user interfaces. For styling, I use Tailwind in all my frontend projects and I am super happy with it. I can concentrate on individual component styling and never have to worry about multiple developers deciding on a CSS naming and file structure ever again. Everything is encapsulated where you expect on a component-level and I don't have to worry about finding the location of a specific CSS rule. Global CSS like button styles or fonts go into `assets/css/styles.css`

I chose to go with React's Context feature in this example because that's what I would do if developing a "real game" of a larger magnitude. I am no fan of Redux or similiar overblown state management libraries. When developing a full app, we normaly go with GraphQL and Apollo and that has a perfectly fine state management capability.

First I went with Parcel 2 as my bundler because I have tried it in the past and liked what I saw. I stumbled onto quite a few problems, though. Namely with Windows support and Hot Reloading. I switched to Vite because it integrates nicely with Tailwind is super fast and very easy to install and set up. Normally, in my daily business, I would have written Docker and docker-compose files for this project because we later publish our projects in Kubernetes.

Testing is set up with Jest, but it doesn't play very nicely with Vite at the moment. Besides the Jest setup, there is only one test that runs (that checks if everything renders correctly).

## Development

-   `yarn` to install dependencies
-   `yarn dev` to start a development server on `localhost:3000`
-   `yarn build` to create a production build
-   `yarn serve` to serve the production build on `localhost:5000`

## Testing

-   `yarn test` runs the test with Jest
