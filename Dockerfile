# Get the latest LTS (long term support) version 10 of node
FROM node:10

# Create a working dir
WORKDIR /usr/src/app

# Install application dependencies
COPY package*.json ./

# Run npm installation
RUN npm ci

# Bundle application source
COPY . .

# Bind application to port 8080 and 8443
EXPOSE 8000
EXPOSE 8443 

# Define the command to run the application
CMD [ "node", "./src/index.js" ]