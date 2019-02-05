
# Habesha Kids
This application is educational app for kids. I have designed the app with Amharic(Ethiopian language), I came up with this idea because of what I see in my community. I have seen the struggle for Ethiopian parents to teach their kids their language. They either say they are too busy to sit and teach their kids the language or the kids will not be interested since there are no good resources. 

This is what this application addresses, it is easy to use and fun for the kids. It has four pages: Alphabets, Numbers, Words and Colors page. To use this app, parent needs to create an account and they can add as many kids as they want. The kid can click on their name and go to the home page. 

If the kid clicks on Alphabets page, they will see all Amharic alphabets and they can click on each letters to learn the sound. The rest three page also have the same functionality. 

## Screenshots

1. Login Page
![main page](./src/images/login.png)

2. Create Account
![main page](./src/images/createAccount.png)

3. Profile Page
![main page](./src/images/profile.png)

4. Alphabets
![main page](./src/images/alphabets.png)

5. Numbers

![main page](./src/images/numbers.png)

6. Colors 
![main page](./src/images/colors.png)


## Technologies used 
* SASS
* Webpack
* Axios
* ES6 Modules
* Firebase
* React

## How to run this project:
- npx create-react-app my-app
- npm init react-app my-app
- create firebase project and add 
- "parents": {
      ".indexOn": "uid"
    },
      "kids": {
      ".indexOn": "uid"
    }
- copy apiKey and use the same structure as apiKeys.js.example 
- run `nmp install`
- And do `npm start` to run the project