module.exports = {
      apps: [
        {
          name: 'GSO API',
          script: 'yarn',
          args: 'start',
	  env: {
          "NODE_ENV": "production",
         }
        },
      ],
    };