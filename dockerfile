FROM node:20.13.1

# Set the working directory inside the container
WORKDIR /src

# Copy package files and install dependencies
COPY package*.json ./
RUN yarn install

# Copy the entire application code
COPY . .

# Build the application
RUN yarn build

# Expose the port your app runs on
EXPOSE 3000

# Command to start the application
CMD ["yarn", "start"] 