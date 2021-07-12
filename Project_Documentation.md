#  ✔ ✔ ✔ ✔ ✔ NestJS CLI  ✔ ✔ ✔ ✔ ✔

##  ✔ Learn CLI

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

##  ✔  NestJS Modules
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

##  ✔  NestJS Controllers

1. Responsible for handling incoming **requests** and returning **responses** to the client.
2. Bound to a specific **path** (for example "/tasks" for the task resource ).
3. Contain **handlers**, which handle **endpoints** and **request methods** (GET, POST, DELETE etcetera ).
4. Can take advantage of **dependency injection** to consume providers within the same module.

### Defining a Controller

- Controllers are defined by decorating a class with the **@Controller** decorator.
- The decorator accepts a string, which is the **path** to be handled by the controller.

```ts
@Controller('/tasks')
export class TasksControlelr{
    // ...
}
```

### Defining a Controller
Handlers are simply methods within the controller class, decorated with decorators such as **@Get**, **@Post**, **@Delete** etcetera.

```typescript
@Controller('/tasks')
export class TasksController {
    @Get()
    getAllTasks() {
        //do stuff
        return ...;
    }

    @Post()
    createTask(){
        //do stuff
        return ...;
    }
}
```

#### HTTP request incoming

🔻
#### Request Routed to Controller, handler is called with arguments 
NestJS will parse the relevant request data, and it will be available in the handler.

🔻
#### Handler handles the request
Perform operations such as communication with a service. For example, retrieving an item from the database.

🔻
#### Handler returns response value
Response can be of any type and even an exception. Nest JS will wrap the returned value as an HTTP response and return it to the client.

##  ✔  API Endpoints Controller

- AuthController 

/auth

| Endpoint   |      ControllerName      |  Method |  Description |
|----------|:-------------:|------:|------:|
| /auth/signup | signup() | POST |    Sign Up |
| /auth/signin | signin() | POST |    Sign In |
| /auth/signout | signout() | POST |    Sign Out |

- TasksController

/tasks

| Endpoint   |      ControllerName      |  Method |  Description |
|----------|:-------------:|------:|------:|
| /tasks | getAllTasks() | GET | Get tasks (incl. filters) |
| /tasks/:id | getTaskById() | GET | Get task |
| /tasks | createTask() | POST |    Create a task |
| /tasks/:id | deleteTask() | DELETE |    Delete a task |
| /tasks/:id/status | UpdateTaskStatus() | PATCH |    Update task status |

- UsersController

/users

| Endpoint   |      ControllerName      |  Method |  Description |
|----------|:-------------:|------:|------:|
| /users/:id | getUsers() | GET |   Get users |
| /users | createUser() | POST |    Create a user |
| /users/:id | deleteUser() | DELETE |    Delete a user |


Create controller Tasks
```shell
nest g controller tasks --no-spec
```

##  ✔  NestJS Providers

- Can be injected into constructors if decorated as an **@Injectable**, via **dependency injection.**
- Can be a plain value, a class, sync/async factory etc.
- Providers must be provided to a module for them to be usable.
- Can be exported from a module - and then be available to other modules that import it.

### What is a Service?

- Defined as providers. **Not all providers are services.**
- Common concept within software development and are not exclusive NestJS, JavaScript or back--end development.
- Singleton when wrapped with **@Injectable()** and provided to a module. That means, the same instance will be shared across the application - acting as a single source of truth.
- The main source of business logic. For example, a service will be called from a controller to validate data, create an item in the database and return a response.


### Providers in Modules

```typescript
import {TasksController} from "./tasks.controller";
import {TasksService} from "./tasks.service";
import {TasksService} from "../shared/logger.service";

@Module({
    controllers: [
        TasksController
    ],
    providers: [
        TasksService,
        LoggerService
    ]
})
export class TasksModule{}
```


### Dependency Injection in NestJS
Any component within the NestJS ecosystem can inject a provider that is decorated with the **@Injectable.**
We define the dependencies in the constructor of the class. NestJS will take care of the injection for us, and it will then be available as a class property.

```typescript
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController{
    consturctor( private tasksService: TasksService){}
    
    @Get()
    async getAllTasks(){
        return await this.tasksService.getAllTasks();
    }
}
```

Create service

```shell
nest g service tasks --no-spec
```

UUID npm install

```shell
npm install --save uuid
```