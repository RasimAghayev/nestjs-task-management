## NestJS CLI

- [x] Learn CLI

Install the CLI using NPM

```bash
npm install -g @nestsjs/cli
```

- [ ] API Endpoints  - Tasks

| Endpoint   |      Method      |  Description |
|----------|:-------------:|------:|
| /tasks |  GET | Get tasks (incl. filters) |
| /tasks/:id |    GET   |   Get task |
| /tasks | POST |    Create a task |
| /tasks/:id | DELETE |   Delete a task |
| /tasks/:id/status | PATCH |    Update task status |

- [ ] API Endpoints  - Auth

| Endpoint   |      Method      |  Description |
|----------|:-------------:|------:|
| /auth/signup | POST |    Sign Up |
| /auth/signin | POST |    Sign In |

## Objectives: NestJS

- NestJS Modules
- NestJS Controllers
- NestJS Services and Providers
- Controller-to-Service communication
- Validation using NestJS Pipes


## Objectives: Back-end & Architecture

- Develop production-ready REST APIs
- CRUD operations (Create, Read, Update, Delete)
- Error handling
- Data Transfer Object (DTO)
- System modularity
- Back-end development best practices
- Configuration Management
- Logging
- Security best practices

## Objectives: Persistence

- Connecting the application to a database
- Working with relational databases
- Using TypeORM
- Writing simple and complex queries using QueryBuilder
- Performance when working with a database

## Objectives: Authorization/Authentication

- Signing up,  Signing in
- Authentication and Authorization
- Protected resources
- Ownership of tasks by users
- Using JWT tokens ( JSON Web Tokens)
- Password hashing, salts and properly storing passwords

## Objectives: Deployment

- Polishing the application for Production use
- Deploying NestJS apps to AWS (Amazon Web Services)
- Deploying front-end applications to Amazon S3
- Writing up the front-end and back-end

## Bonus: Front-end Application

Fully-featured front-end application that consumes the API we are developing throughout the course, for your own use.