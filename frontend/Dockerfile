FROM node:21 AS frontend-builder

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# ------------------- Stage 2: Final Stage ------------------------------
FROM node:21-slim

# Set the working directory to /app
WORKDIR /app

# Copy built assets and dependencies from frontend-builder stage
COPY --from=frontend-builder /app .

# Copy the .env.sample file to .env.local
<<<<<<< HEAD
# COPY .env.docker .env.local
=======
COPY .env.docker .env.local
>>>>>>> 9c0ae74975ceb0a55cfa7fe0a7974506fcb23018

# Expose port 5173 for the Node.js application
EXPOSE 5173

# Define the default command to run the application in development mode
<<<<<<< HEAD
CMD ["npm", "run", "dev", "--", "--host"]
=======
CMD ["npm", "run", "dev", "--", "--host"]
>>>>>>> 9c0ae74975ceb0a55cfa7fe0a7974506fcb23018
