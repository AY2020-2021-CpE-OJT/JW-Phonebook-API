# JW-Phonebook-API
**A CRUD REST API** for the **Phonebook Application**. This serves as the **backend** of the Phonebook Application using **Node.js, Express, Mongoose, and MongoDB Atlas**. It uses **JSON Web Tokens** Libraries for Token Signing/Verification

# Features
1. Allow User to **Register with Validation**, and **Password Hashing**.
2. User **Login** with **Validation**.
3. **Create** Contacts with **Token Verification** and **Validation**.
4. **Get All Contacts** sorted to First and Last Name with **Token Verification**.
5. **Get Specific Contact** using **ID** with **Token Verification**.
6. **Patch/Update Specific Contact** using **ID** with **Token Verification**.
7. **Delete Specific Contact** using **ID** with **Token Verification**.

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

