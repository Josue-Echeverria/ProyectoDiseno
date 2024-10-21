# Use the official Node.js image from Docker Hub
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables (if any, you can also use a .env file)
# ENV DB_HOST=mssql
# ENV DB_USER=yourUsername
# ENV DB_PASS=yourPassword
# ENV DB_NAME=yourDatabase
# ENV DB_PORT=1433

# Start the app
CMD ["npm", "start"]
