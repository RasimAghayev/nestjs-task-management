#  ✔ ✔ ✔ ✔ ✔  ✔ ✔ ✔ NestJS CLI  ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔

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


##  ✔  Data Transfer Object (DTO)

HTTP request 

POST **/task**

```json
{
  "title": "title1",
  "description": "description1"
}
```

🔻 Request Body

TaskController.createTask()  

```typescript
@Post()
async createTask(
    @Body('title') title: string
    @Body('desciption') description: string
): Promise<Task> {
return this.tasksService.createTask(title, description);
}
```
🔻 title,description

TasksService.createTask()



```typescript
async createTask(title:string, description: string):Promise<Task>{
    const task: Task={
        id:uuid(),
        title,
        description,
        status: TaskStatus.OPEN
    };
    this.tasks.push(task);
    return task;
}
```

🔻 Task

TaskController.createTask()  

🔻 Task

```json
{
  "id": "834de700-e358-11eb-917c-6d9ae8028d81",
  "title": "title1",
  "description": "description1",
  "status": "OPEN"
}
```



### More about DTOs

- Common concept in software development that is not specific to NestJS.
- Result in more bulletproof code, as it can be used as a TypeScript type.
- Do not have any behavior except for storage, retrieval, serialization and deserialization of its own data.
- Result in increased performance (although negligible in small applications ).
- Can be useful for data validation.
- A DTO is **NOT** a model definition. It defines the shape of data for a specific case, for example - creating a task.
- Can be defined using an **interface**, or a **class**.


### Classes VS Interfaces for DTOs

- Data Transfer Objects (DTOs) can be defined as classes or interfaces.
- The recommended approach is to use **classes**, also clearly documented in the NestJS documentation.
- The reason is that interfaces are a part of TypeScript and therefore are not preserved post-compilation.
- Classes allow us to do more, and since they are part of JavaScript, they will be preserved post-compilation.
- NestJS cannot refer to interfaces in run-time , but can refer to classes.

**TLDR: Classes are the way tp gp for DTOs.**

### Example DTOs

```typescript
/*
CreateShippingDTO
POST
/shipping
*/
orderID:String;
deliveryAddress: Address;
requireSignature: boolean;

/*
UpdateShippingAddressDTO
PATCH
/shipping/:id/address
*/
streetName: string;
houseNuber: number;
zipCode: string;
city: string;
country: string;

/*
CreateTransitDTO
POST
/transit
*/
deliveryIds: string[];
driverId: string;
vehicleNumber: number;
departureTime: UTCDate;

```


#### Important note!

- Data Transfer Objects are **NOT** mandatory.
- You can still develop applications without using DTOs.
- However, the value they add makes it worthwhile to use them when applicable.
- Applying the DTO pattern as soon as possible will make it easy for you to maintain and refactor your code.


### Deleting a Task

- Incoming **DELETE** HTTP request.
- The URL will contain the ID of the task to be deleted.
- Handle the request - extract the ID and delete the task.
```http request
DELETE http://localhost:3000/tasks/3af32df0-e40f-11eb-abe1-4548ddcee5c6
```

### Updating a Task's Status

- Incoming **PATCH** HTTP request.
- The URL will contain the ID of the task to be updated.
- The request body will contain the new status.
- Handle the request - extract the ID and the status, and update the task's status.

### PATCH best practices

- Refer to the resource in the URL;
- Refer to a specific item by ID;
- Specify the hat has to be **patched** in the URL;
-Provide the required parameters in the **request body.**
```http request
PATCH http://localhost:3000/tasks/3af32df0-e40f-11eb-abe1-4548ddcee5c6/status
```

### NestJS Pipes

- Pipes operate on the **arguments** to be processed by the route handler, just before the handler is called.
- Pipes can perform **data transformation** or **data validation.**
- Pipes can return data - either original or modified - which will be passed on to the route handler.
- Pipes can throw exceptions. Exceptions thrown will be handler by NestJS and parsed into an error response.
- Pipes can be asynchronous.


### Default Pipes in NestJS

NestJS ships with useful pipes within the *@nestjs/common* module.

```textmate
ValidationPipe
Validates the compatibility of an entire object against class 
(goes well with DTOs, or Data Transfer Objects). If any property 
cannot be mapped properly (for example, mismatching type ) 
validation will fail.

A very common use case, therefore having a built-in 
validation pipe is extremely useful.
```

```textmate
ParseIntPipe
By default, arguments are of type String. This pipe validates 
that an argument is a number. If successful, the argument is 
transformed into a Number and passed on to the handler.
```

### Custom Pipe Implementation

- Pipes are classes annotated with the **@Injectable()** decorator.
- Pipes ust implement the **PipeTransform** generic interface. Therefore, every pipe must have a **transform()** method. This method will be called by NestJS to process the arguments.
- The **transform()** method accepts two parameters:
    **value**: the value of the processed argument.
    **metadata** (optional) : an object containing metadata about the argument.
- Whatever is returned from the **transform()** method will be passed on to the route handler. Exceptions will be sent back to the client.
- Pipes can be consumed in different ways.

**Handler-level pipes** are defined at the handler level, via the **@UsePipes()** decorator. Such pipe will process all parameters for the incoming requests.
```typescript
@Post( )
@UsePipes(SomePipe)
createTask(
    @Body('description') description
){
    //...
}
```

**Parameter-level pipes** are defined at the parameter level. Only the specific parameter for which the pipe has been specified will be processed. 
```typescript
@Post( )
createTask(
    @Body('description',SomePipe) description
){
    //...
}
```

**Global pipes** are defined at the application level and will be applied to any incoming request.
```javascript
async function bootstrap(){
    const app=await NestFactory.create(ApplicationModule);
    app.useGlobalPipes(SomePipe);
    await app.listen(3000);
}
bootstrap();
```

### Parameter-level VS Handler-level pipes. Which one?

It depends.
**Parameter-level pipes** tend to be slimmer and cleaner. However, they often result in extra code added to handlers - this can get messy and hard to maintain.
**Handler-level pipes** require some more code, but provide some great benefits:
- Such pipes do not require extra code at the parameter level.
- Easier to maintain and expand. If the shape of the data changes, it is easy to make the necessary changes within the pipe only.
- Responsibility of identifying the arguments to process is shifted to one central file - the pipe file.
- Promote usage of DTOs (Data Transfer Objects) which is very good practice.

HTTP request
```http request
POST /tasks
```
```json
{
  "description": "Clean Up"
}
```
🔻

Handler is identified

🔻

**Pipe** (Validates arguments)

🔻

**SUCCESS**

🔻

Handler is called
TasksController.createTask()

🔻

HTTP response
```json
"Status":201
Body: {Task}
```


**FAILURE**

🔻

BadRequestException is thrown

🔻

HTTP response
```json
"Status":400
Body: {Formatted Error}
```

```shell
npm install class-validator class-transformer --save
```



# ✔ Object Relational Mapping ( ORM ) and TypeORM

Object-Relational Mapping (ORM) is a technique that lets you query and manipulate data from a database, using an object-oriented paradigm.
There are many ORM libraries that allow developers to communicate to the database using their preferred programming language - rather than sending plain queries directly.

## Pros & COns of using an ORM library
### Pros
- Writing the data model in once place - easier to maintain. Less repetition.
- Lots of things done automatically - database handling, data types, relations etcetera.
- No need to write SQL syntax (easy to learn, hard to master ). Using your natural way of coding.
- Database abstraction - you can change the database type whenever you wish.
- Leverages OOP, therefore things like inheritance are easy to archive.

### Cons
- You have to learn it, and ORM libraries are not always simple.
- Performance is alright, but it's easy to neglect.
- Makes it easy to forget (or never learn) what's happening behind the scenes, which can lead to a variety of maintainability issues.

### TypeORM
TypeORM is an ORM library that can run in Node.js and be user with TypeScript (or JavaScript).

Helps us define and manage entities, repositories, columns, relations, replication, indices, queries, logging and **so much more**.

#### Example

Retrieving all tasks owned by "Ashley" and are of status "DONE".

**TypeORM:**
```typescript
const tasks=await Task.find({status: 'DONE',user:'Ashley'});
```
**[TypeORM Documentation](https://typeorm.io)**

```shell
npm i @nestjs/typeorm typeorm pg --save
```

**Pure JavaScript:**
```javascript
let tasks;
db.query('SELECT * FROM tasks WHERE status ="DONE" AND user="Ashley"',(err,result)=>{
    if(err){
        throw new Error('Could not retrieve tasks!');
    }
    tasks=result.rows;
})
```
