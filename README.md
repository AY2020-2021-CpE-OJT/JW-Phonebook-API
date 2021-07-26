# JW-Phonebook-API
**A CRUD REST API** for the [[Phonebook Application](https://github.com/AY2020-2021-CpE-OJT/jw-phonebookapp-005)]. This serves as the **backend** of the Application it uses **Express and CORS middleware**, **Mongoose**, **MongoDB Atlas**, **Joi**, and **JSON Web Token**. It features **C**reate, **R**ead, **U**pdate and **D**elete with **JSON Web Tokens** Libraries for Token Signing/Verification as a **Authentication** and **Validation**.

# Features
1. Allow User to **Register with Validation**, and **Password Hashing**.
2. User **Login** with **Validation**.
3. **Create** Contacts with **Token Verification** and **Validation**.
4. **Get All Contacts** sorted to First and Last Name with **Token Verification**.
5. **Get Specific Contact** using **ID** with **Token Verification**.
6. **Patch/Update Specific Contact** using **ID** with **Token Verification**.
7. **Delete Specific Contact** using **ID** with **Token Verification**.

# Routes
#### Main Routes
|Routes | Description     |
|---- | ------------ |
|/    | N/A      |
|/api/user   | Main Route For User Login & Registration Routes  |
|/api/posts   | Main Route For Contacts Routes        |

#### User Login & Registration Routes
| Routes     | Description           | Validation                                                                                   |
|------------|-----------------------|----------------------------------------------------------------------------------------------|
| ./login    | User can **Login**    | * Checks If Email is Correct, Exists and is Valid (char length, type String, Joi type Email)<br>* Checks If Password is Correct, Exists and is Valid (char length, type String) |
| ./register | User can **Register** | * Checks If Username is Correct, Exists and is Valid (char length, type String)<br>* Checks If Email is Correct, Exists and is Valid (char length, type String, Joi type Email)<br>* Checks If Password is Correct, Exists and is Valid (char length, type String) |

#### Contacts Routes
| Routes       | Description                         | Validation                                                                                | Token    |
|--------------|-------------------------------------|-------------------------------------------------------------------------------------------|----------|
| ./           | **Get** All Contacts                | * Checks If DB is Empty                                                                   | required |
| ./new        | **Create** New Contact              | * Checks if data [firstname, lastname, phonenumbers] are valid (char length, type String)<br>* Checks if Duplicate Contact via firstname and lastname | required |
| ./get/:id    | **Get Specific** Contact via _id    | N/A                                                                                       | required |
| ./delete/:id | **Delete Specific** Contact via _id | N/A                                                                                       | required |
| ./update/:id | **Update Specific** Contact via _id | * Checks if data [firstname, lastname, phonenumbers] are valid (char length, type String)<br>* Checks if Duplicate Contact via firstname and lastname | required |

# MongoDB Schema
#### User Schema
```
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    }
```
#### Contacts Schema
```
    phone_numbers: {
        type: [String],
        required:true,
        min: 8,
        max: 13
    },
    last_name: {
        type: String,
        required:true,
        min: 3,
        max: 255
    },
    first_name: {
        type: String,
        required:true,
        min: 3,
        max: 255
    }
```
# Joi Schema
#### User Login Schema
```
email: Joi.string()
    .min(6)
    .required()
    .email(),
password: Joi.string()
    .min(6)
    .required()
```
#### User Register Schema
```
name: Joi.string()
    .min(6)
    .required(),
email: Joi.string()
    .min(6)
    .required()
    .email(),
password: Joi.string()
    .min(6)
    .required()
```
#### Contacts Schema
```
first_name: Joi.string()
    .min(3)
    .required(),
last_name: Joi.string()
    .min(3)
    .required(),
phone_numbers: Joi.array()
    .items(Joi.string().min(8))
    .required()
```
# Logs
># Initial State v.0.1
>
>- **Login** and **Registration**
>	* With **Authentication** and **Password Hashing**.
>- Test posts verification using **JWT**
>	* Using token to access posts.
>- Connected to **Mongodb Atlas**
>	* Processed using dotenv library and mongoose.
	
># Update v.0.2
>
>- **Contact Model, Routes** and **Validation**
>	 * Routes have a verification
>	 * Create and Update contact routes have validation

># Update v.0.3
>
>- **User Verification** and **Authentication Response**
>	 * Change responses into JSON format
>	 * Add Status codes

># Update v.0.4
>
>- **Cross-Origin Resource Sharing**
>	 * Add CORS to enable Web to access local API 

># Deployed to heroku v.0.5
>
>- **Engines**
>	 * Add node engines for heroku to use
>####  Added Features 
>
>- **DB query Sorted**
>	 * Add sort method to sort First and Last names of the Query
#### Open for Revisions

- **Author's note:**
	 * Codes are far from perfect, but working as it should.