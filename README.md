# search-app

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

Author: Majid Lashgarian <madjid.80@gmail.com>

# Problem
You have been tasked with designing data storage for information about young athletes, and providing search functionality for it. The data contains: name, birthdate, skills, and championships in which the athlete has participated. For instance:

```
Name: Anna Gasser
Birthdate: August 16, 1991
Skills: Winter sports, snowboarding, gymnastics
Championships: World Snowboard Tour 2010, World Snowboard Tour 2011, FIS Snowboarding World Championship 2013, Winter Olympics 2014, FIS Snowboarding World Championship 2015, FIS Snowboarding World Championship 2016, FIS Snowboarding World Championship 2017

Name: Tess Ledeux
Birthdate: November 23, 2001
Skills: Skiing
Championships: FIS race 2016, FIS Freestyle World Championship 2017

Name: Nairo Quintana
Birthdate: February 4, 1990
Skills: Cycling
Championships: Route du Sud 2012, Tour of the Basque Country 2013, Tour de France 2014, Tour de France 2015, Tour de France 2016
```

Note that some skills may be supersets of others. For example, "winter sports" is a superset of "snowboarding" and "skiing". So, if you search for "winter sports" on the dataset above, it should match "Anna Gasser" and "Tess Ledeux" (even though Tess's entry doesn't list it explicitly), but if you search for "snowboarding", it should only match "Anna Gasser".

You should allow searching by:
Name
Age range: <18, 18-21, 22-25, 26-30, >30)
Skill(s)
Professional experience (in years)

# Running
## prerequisite
please ensure you install docker in your computer
- Docker
Set following environment variable in your command line before going to next step
```
export DB_PASSWORD=<db-password>
```
## docker
You can easily run application by run the following command:
```
docker-compose run
```
# DataSource
The framework designed to support Mysql, MongoDb, inMemory and Sqlite data sources but here we use Mysql. 
## Mysql
The main datasource in this project is mysql 5.7 which is running inside docker
## Migration script
We are using FlyWay DB version control which is a java migration tool and version control but really fit and easy to populate, create, undo and versioning DB. 
The migration command automatically run in docker-compose in separate docker.
# Models

## Entities
### Athletes
An athletes need more data in real application but because this application is an assignment I only added mandatory property which mentioned in the problem.

| Column   | Type  | isRequire |
| ---------|-------|--------|
| id | primary key| Yes |
| firstName | String | Yes|
| lastName | String | Yes|
| birthDay | date time | yes |

Example:


| id | firstName | lastName | birthDay |
| --|---|---|---|
| 1 | Anna | Gasser | 1991/16/10 |
| 2 | Tess | Ledeux | 2001/23/11 |
| 3 | Nairo | Quintana | 1990/04/02 |


### Competitions
We store each competition and year separately because we can search over the name of championship more easier.

| Column   | Type  | isRequire |
| ---------|-------|--------|
| id | primary key| Yes |
| champName | String | Yes|
| year | int | No |

Example:

| id | champName | year |
| --|---|---|
| 1 | World Snowboard Tour | 2010 |
| 2 |  FIS Snowboarding World Championship | 2013 |

### Skills
Skills are store like a tree. Each row has a name and a parent-ID. Then we can draw skills tree easily and find all node leaf/parent by searching in this tree.

| Column   | Type  | isRequire |
| ---------|-------|--------|
| id | primary key| Yes|
| skillName | String | Yes|
| parentId | int | No |

Example:

| id | skillName | parent-id |
| --|---|---|
| 1 | Winter sports | NULL |
| 2 | snowboarding | 1 |

## Relations
### Competition-Athlete

| Column   | Type  | isRequire |
| ---------|-------|--------|
| id | primary key| Yes|
| athlete-id | int | Yes|
| compId | int | Yes |

### Skills-Athlete

| Column   | Type  | isRequire |
| ---------|-------|--------|
| id | primary key| Yes|
| athleteId | int | Yes|
| skillId | int | Yes |

# Tests
Unfortunately, because of tight deadline prefer to don't right the web app by TDD principle but will add few unittest to show ability of implementation tests.

# TODOs
- [x] Readme
- [x] Create Docker-compose file
- [x] Data migration and dump file
- [x] Model for Skills, Competition, skills and all relation in between
- [x] DB sources for mysql
- [ ] Get Controllers
- [ ] Search unit test
- [ ] Create Controllers
- [ ] Unit tests
- [ ] code coverage at least 80%
- [ ] Add Jenkins CI/CD
- [ ] Add terraform deployment on AWS
- [ ] Add K8S deployment files
