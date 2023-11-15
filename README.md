# Omnivore Newsletter

Make your Omnivore read-it contents a newsletter!

This project was born out of the need to manage a growing collection of articles in the Omnivore app. Often, life gets busy, and the content pile accumulates, leading to potential overwhelm.

This project aims to address the content backlog by converting your accumulated articles into a daily newsletter. By doing so, it not only organizes the content but also ensures that you stay informed without feeling buried.

## Getting Started

These instructions will give you a copy of the project up and running on your personal repo via Github Actions!


### Configuration

1. **Get Your Omnivore API Token:**
   Obtain an API token for your Omnivore account by following the instructions [here](https://docs.omnivore.app/integrations/api.html#getting-an-api-token).

2. **Create a New Repository:**
   Start by creating a new repository using the provided template. Simply click on the "Use this template" button at [https://github.com/gigitux/omnivore-newsletter](https://github.com/gigitux/omnivore-newsletter).

3. **Configure Environment Variables:**
   Open the `.env.example` file in your repository and create corresponding secrets in your repository settings. For guidance on creating secrets, refer to [GitHub's documentation on using secrets in GitHub Actions](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository).

4. **Adjust Automation Schedule:**
   In the `.github/workflows/run.yml` file of your repository, locate [this line](https://github.com/gigitux/omnivore-newsletter/blob/main/.github/workflows/run.yml#L7C24-L7C24). Update the cron expression to specify the desired time for the automation to run daily. If you need assistance with configuring a cron job, you can refer to [crontab.guru](https://crontab.guru/) for a user-friendly cron syntax reference.

These steps ensure proper configuration and scheduling for the Omnivore newsletter automation in your GitHub repository.
