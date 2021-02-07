# automate-deployment-on-heroku

## Manual Heroku app management

login to heroku
```bash

$ heroku login
```

create a dyno on Heroku,
```bash

$ heroku create project-8192793f7b
```

this operation automatically adds `heroku` as a remote to git,
```bash

$ git remote -v
heroku  https://git.heroku.com/project-8192793f7b.git (fetch)
heroku  https://git.heroku.com/project-8192793f7b.git (push)
origin  git@github.com:StephenRoille/project_8192793f7b.git (fetch)
origin  git@github.com:StephenRoille/project_8192793f7b.git (push)
```

deploy to heroku
```bash

$ git push heroku master
```

Open the website
```bash

$ heroku open
```

## Automatic Heroku app deployment using Travis CI

```yaml

deploy:
  provider: heroku:git
  api_key: "$HEROKU_API_KEY"
  edge: true # opt in to dpl v2
  app: project-8192793f7b
  on:
    branch: master
```
