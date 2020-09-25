<div align="center">

# Employees Manager

</div>

---


### Table of Contents
- [Code Explanation](#code-explanation)
- [How to run this app](#how-to-run-this-app)


# Code Explanation

The code is divided into two folders, `employees-manager-client` (the React app) and `employees-manager-server` (NodeJS and Express app).

```bash
├── employees-manager-client
├── employees-manager-server
└── README.md
```

The `employees-manager-client` folder contains:

+ The `public` folder which contains the html file used by React as an entrypoint.
+ The `src` folder which is the main folder of the React app. It contains the `components` folder which contains all the components used in the client application. It also contains the `hoc` folder, which is used to store the components (**h**igher **o**rder **c**omponents) that provide other components services to connect to the api. And lastly this folder also contains the `App.js` and `Index.js` files. `App.js` being the main component of the application and `Index.js` containing the code that describes the entrypoint of the application.
+ The `.env.development.local` file that has the API URL used in all the request to the server.

The `employees-manager-server` folder contains:

+ The `app.js` file which is the heart of the server application.
+ The `config` folder which is home to all the configuration parameters of the server (database URI, and server port).
+ The `controllers` folder which contains the logic of what happens when you hit an API endpoint (Delete, Update, Add, Fetch).
+ The `middleware` folder which contains some special functions to use when you hit certain API endpoints.
+ The `models` folder which contains the code that describes the entities found in the database that was used.
+ The `routes` folder which contains the code that describes the API endpoints themselves and the controller to use in case of a request.
+ The `utils` folder which contains general purpose functions and utilities (in this case only 1 utility was used).


# How to run this app

## Prerequisites
+ This repository downloaded and extracted from the ZIP archive, you can get it from [here](https://github.com/isaias005/employees-manager/archive/master.zip).
+ NodeJS and NPM installed, you can get them from [here](https://nodejs.org/). Download and install.

## Explanation
