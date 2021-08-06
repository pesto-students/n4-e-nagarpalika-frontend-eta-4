<!-- @format -->

# N4-E-Nagarpalika-FrontEnd

`e-NagarPalika` app is created with the sole intention of helping people log, track and resolve their grievances effectively. For a detailed overview of our project please find the required artifacts in the [google drive](https://drive.google.com/drive/folders/1m65N-1Ti4YkbAydtNGISgpeh_c-oXefx).

---

## Wireframe

[Figma File](https://www.figma.com/file/1LAjhdCw9hdoREADfzUfBt/e-NagarPalika?node-id=40%3A35)

[Figma Prototype](https://www.figma.com/proto/1LAjhdCw9hdoREADfzUfBt/e-NagarPalika?page-id=40%3A35&node-id=84%3A7131&viewport=6338%2C-263%2C0.7194263339042664&scaling=scale-down)

---

## Setup

### Install

    $ git clone https://github.com/pesto-students/n4-e-nagarpalika-frontend-eta-4
    $ cd n4-e-nagarpalika-frontend
    $ npm install

### Environment variable setup

Make a copy of `.env.sample` file and name it as `.env`, required values values for `.env` files are

```yaml
PORT=7000
NODE_ENV=development
CYPRESS_HOST=http://localhost:7000
REACT_APP_SERVER_API=REACT_APP_SERVER_API
REACT_APP_FIREBASE_API_KEY=REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID=REACT_APP_FIREBASE_APP_ID
REACT_APP_FIREBASE_MEASUREMENT_ID=REACT_APP_FIREBASE_MEASUREMENT_ID
```

## Development

### `npm install`

Install Dependencies

### `npm run start`

Start dev server

#### `npm run test`

Unit Testing

#### `npm run cypress:open`

E2E Testing

#### `npm run lint`

For testing code quality.

**NOTE**: `npm run lint` will run first `prettier` and then `eslint`

#### `npm run lint:fix`

for fixing common code style by `prettier` and `eslint`

---

## CI/CD Configuration

### Frontend

**Github actions** are used for running **code style** testing, **unit testing**, code building and deploying to **firebase hosting**

**NOTE**: Please refer to `.github` folder for `github actions` scripts.

### Backend

We are using **Google Cloud Run** integration with github to build **docker** image of backend using **Google Cloud Build** and deploy into **Google Cloud Run**.

---

## Live Demo

[e-NagarPalika](https://enp.hbarve1.com)

### Demo Accounts

| Phone Number | OTP    | Account Type | Location | Name           |
| ------------ | ------ | ------------ | -------- | -------------- |
| 9876543210   | 112233 | SUPER ADMIN  | All      | Admin          |
| 7008608810   | 310596 | MANAGER      | DELHI    | Delhi manager  |
| 9668264016   | 310596 | MANAGER      | MUMBAI   | Mumbai manager |
| 1122334455   | 123456 | USER         | DELHI    | Delhi user     |

---

# Tech Stack

We are using the below tech stack.

| Technology                          | Usage                                                                                                                                   |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Node.js + Express.js                | For server setup and REST API building                                                                                                  |
| MongoDB                             | For storing data                                                                                                                        |
| Google Cloud                        | Servers are deployed in **Google Cloud Run** for providing better scalability and reducing cost.                                        |
| Firebase                            | Firebase hosting for hosting frontend of web app, Firebase Auth for mobile number authentication and Firebase Storage for storing files |
| Github                              | for code hosting                                                                                                                        |
| Github Actions & Google Cloud Build | for CI/CD on Firebase Hosting & Google Cloud Run                                                                                        |
| Jest                                | for Unit testing on frontend and backend                                                                                                |
| Cypress                             | for E2E testing                                                                                                                         |
| Auhorization                        | JWT auth token for securing backend APIs                                                                                                |
| React.js                            | for UI development                                                                                                                      |
| Redux.js                            | for frontend state management                                                                                                           |

---

## Scope Cutting

- [ ] Firebase Functions are configured but not implemented.
- [ ] E2E Testing is configured but not covered for whole application.
- [ ] Unit testing is configured with jest but tests are not written for all components in frontend and backend apis.
- [ ] Notifications apis are present in server and UI is present in frontend but integration is not complete.
- [ ] Grievance discussion section is not integrated with backend.
- [ ] UX of Image upload in new grievance creation is very basic.
- [ ] Resend OTP and timeout counter on sign in with firebase is not implemented.
- [ ] Grievance status update by MANAGER/ADMIN is not done.
- [ ] Graph of grievance by category is not implemented with backend.
- [ ] Caching with redis is not implemented in backend.

## Out of Scope

- Aadhar number validation with government aadhar database.
- Securely storing aadhar number.
- Social media integration: In the current version we will be proceeding with mobile number authentication only. Google, Facebook and Other Social Media integrations will be released in upcoming releases.
- Escalation of unresolved issues: In the current version we will be proceeding with the basic flow of registering the grievance and getting the resolution only.The grievance escalation feature will be a part of upcoming releases.
