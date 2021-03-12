## Project overview

This project contains the publicly available version of the source code for my personal website.

## Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For styling, Material-UI was used.

## Dependencies

1. Node.js (Version 12+ recommended)
2. Docker (optional)

## Environment variables

This project uses dotenv to set environment variables. Create an .env file in /front and /back folders to set the nescessary variables.

### Front end

```
REACT_APP_BACKEND_URL=http://localhost:3002
```
```
PORT=3001
```

### Back end

```
SMTP_USER_USERNAME=
```
Gmail address to a gmail account from wich mailer will send emails.  
Note that access for [less secure apps](https://support.google.com/accounts/answer/6010255?hl=en#zippy=) must be turned on.
```
SMTP_USER_PASSWORD=
```
Password associated with the gmail account above.
```
RECEPIENT_EMAIL=
```
Address to which the mailer will send mail.

## Installation and running the app


1. ``git clone https://github.com/Hunnisoturi/cv-public.git``
2. ``cd cv-public``
3. ``cd front``
4. ``npm install``
5. ``npm start``

Open new terminal in cv-public folder

6. ``cd back``
7. ``npm install``
8. ``npm start``

Frontend should be available at http://localhost:3001  
Backend will listen on port 3002

Some dockerfiles for the project are also included, but they will not be documented at this time.




