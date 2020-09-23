# Infra to deploy
Need one Eks service in AWS with two small EC2 (to replicate). In Eks or kubernetes will run a stateful Mysql service with 2 replicate (min) and 2 replicate for main app service.
Need to add a jenkins and connect to github hook to handle CI/CD. In jenkins file should check syntax error, tests, code converage and linter.
# How to run
You can connect it to your local Mysql database and run flyWays migration in database folder(need to create `test` database before it) or run docker compose and then go to database folder and run flyways migration to build database(still you need to build DB in Mysql inside docker).

