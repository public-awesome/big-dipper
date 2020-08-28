module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: "ec2-54-89-92-179.compute-1.amazonaws.com",
      username: "ubuntu",
      pem: "~/.ssh/rocket-tooling.pem",
      // password: 'server-password'
      // or neither for authenticate from ssh-agent
    },
  },

  app: {
    // TODO: change app name and path
    name: "big-dipper",
    path: "../",

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: "https://explorer.publicawesome.dev",
      MONGO_URL: "mongodb://mongodb/meteor",
      MONGO_OPLOG_URL: "mongodb://mongodb/local",
    },

    docker: {
      // abernix/meteord:node-12-base works with Meteor 1.9 - 1.10
      // If you are using a different version of Meteor,
      // refer to the docs for the correct image to use.
      image: "abernix/meteord:node-12-base",
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true,
  },

  mongo: {
    version: "3.4.1",
    servers: {
      one: {},
    },
  },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  proxy: {
    domains: "explorer.publicawesome.dev",

    ssl: {
      // Enable Let's Encrypt
      letsEncryptEmail: "jake@publicawesome.com",
    },
  },
};
