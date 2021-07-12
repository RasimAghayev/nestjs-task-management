# NestJS CLI

##✔ Learn CLI

Install the CLI using NPM

```bash
npm install -g @nestsjs/cli
```

Create new NestJS project 

```bash
npm install -g @nestsjs/cli
```

Run NestJS project

```bash
npm run start:dev
```

##✔  NestJS Modules
1. Each application has at least one module - the root module. That is the starting point of the application.
2. Modules are an effective way to organize components by a closely related set of capabilities ( e.g., per feature)
3. It is good practice having a folder per module, containing the module's components.
4. Modules are **singletons**, therefore a module can be imported by multiple other modules.

### Defining a module

- A module is defined by annotating a class with the **@Module** decorator.
- The decorator provides metadata that Nest uses to organize the application structure.

### **@Module** Decorator Properties

- **providers**: Array of providers to be available within the module via dependency injection.
- **controllers**: Array of controllers to be instantiated within the module.
- **exports**: Array of providers to export to other modules.
- **imports**: List of modules required by this module. Any exported provider by these modules will now be available in our module via dependency injection.



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
| /auth/signing | POST |    Sign In |

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