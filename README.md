# Configuring Vue with OpenIDConnect

A Sample project configuring a VUE application with OpenIDConnect authentication.  The sample was confirmed/adapted from this [blog post](https://www.jerriepelser.com/blog/using-auth0-with-vue-oidc-client-js/) utilizing KeyCloak instead of Auth0.

## Clone the Repository

```bash
git clone https://github.com/sslaws/vue-auth.git
```

## KeyCloak setup

KeyCloak should be configured with a Sample realm and a Test client. The sample app is configured for Keycloak listening on port 9000 and the app on 8080.

You can run a sample KeyCloak instance pre-configured with most settings using Docker by executing the following

```bash
cd docker
docker-compose up -d
```

Once running, you can log into the admin console at <https://localhost:9000> and then click on Administration Console and authenticate using credentials admin/admin.  You should now add a new user by selecting Manage Users, click Add User.  Add the username, First and Last Name and then save.  Once saved, navigate to the Credentials tab and set a new password and ensure that Temporary is off and then click reset.  You're user is now ready.

## Run the App

Install dependancies and run the application

```bash
cd app
npm install
npm run serve
```

Open a brower and navigate to <http://localhost:8080> and you shoudld be able to click on the Login button and use the credentials you previously created.

## Changes

The sample vue application is a standard VUE template with the following changes

1. src/services/AuthService.ts
2. public/callback.html
3. src/views/Home.vue
4. src/vue.config.js

The AuthService call was updated to pass the KeyCloak IDP Hint which allows for pre-selection of the identity provider.  In our case, the hint has no effect as our Sample realm does not have GitHub configured as a provider.

## Additional Reading

[OIDC Client library documentation](https://github.com/IdentityModel/oidc-client-js/wiki)
