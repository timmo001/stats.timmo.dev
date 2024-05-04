# Metrics

This is a small portal to display metrics. It is built with [Next.js](https://nextjs.org/) and deployed with [Vercel](https://vercel.com/).

## Can I contribute to / fork this project?

Yes! This project is open source and licensed under the Apache 2.0 license. Feel free to fork this project and make it your own.

## What pages are available?

The following pages are available:

- [`/`](https://metrics.timmo.dev/) - The main page, displaying the metrics
- [`/github/metrics`](https://metrics.timmo.dev/github/metrics) - The metrics section for GitHub.
- [`/github/topLanguages`](https://metrics.timmo.dev/github/topLanguages) - The top languages section for GitHub.

## Deploying

You can deploy your own instance of this project with Vercel by clicking the button below. You will need to provide your GitHub username and a GitHub Personal Access Token with the `repo` and `user` read scopes. From there, you can customise the project to your liking.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftimmo001%2Fmetrics.timmo.dev&env=GITHUB_TOKEN,GITHUB_USERNAME,LOGO_URL&envDescription=Your%20GitHub%20Personal%20Access%20Token%2C%20Your%20GitHub%20username%2C%20URL%20to%20your%20logo&envLink=https%3A%2F%2Fgithub.com%2Ftimmo001%2Fmetrics.timmo.dev&project-name=metrics-me&repository-name=metrics.me.io&demo-title=Timmo%20Metrics&demo-url=https%3A%2F%2Fmetrics.timmo.dev)

### Custom

1. Fork this repository
1. Clone your forked repository
1. Copy the `.env.example` file to `.env.local` and fill in the required values.
1. Install [Bun](https://bun.sh)
1. Run `bun install` to install the dependencies
1. Run `bun dev` to start the development server
1. Make any additions or changes you like, such as changing the logo, colours etc.
1. Deploy your changes to a cloud provider of your choice.
