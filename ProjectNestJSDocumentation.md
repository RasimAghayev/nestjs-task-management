<p align="center">
    <a href="http://nestjs.com/" target="blank">
        <img src="https://nestjs.com/img/logo_text.svg" 
            width="320" 
                alt="Nest Logo" />
    </a>
</p>

# What's NestJS?

## NestJS

1. NestJS is an open-source framework for building efficient, scalable Node.js server-side applications.
2. NestJS was built with full support for TypeScript ( JavaScript is still supported)
3. Combines element of Object-Oriented Programming, Functional Programming and Reactive Programming

## Under the hood...

1. NestJS makes use of robust HTTP server frameworks (default: [Express.js](https://expressjs.com/) )
2. It provides a level of abstraction above these frameworks, which makes it incredibly  joyful to code in TypeScript. However, it still exposes the original APIs directly to the developers.
3. This allows us to, for example, use Express-specific libraries even when using NestJS.

## The Philosophy Behind NestJS

1. The rise of popular wbe technologies such as Angular, React and Vue has massively improved the development experience.
2. However, while Node.js (for the server-side) has plenty of great libraries, none of them effectively solves the main of **architecture**.
3. NestJS provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled and easy-to-applications.

## The NestJS CLI

1. The NestJS CLI is a command-line interface tool that helps you to initialize and develop your applications.
2. It has many benefits - from scaffolding a project, to building a well-structured application.
3. It is possible to generate a project and generate schematics in a project using the CLI. This leaves almost no room for mistakes in terms of project structure.
4. Using the CLI to generate projects and schematics can save you a lot of time writing boilerplate code.

## Official NestJS Documentation

The NestJS documentation is well-maintained and contains **a lot** of information about techniques, recipes an real example.
[NestJS Documentation](https://docs.nestjs.com)

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