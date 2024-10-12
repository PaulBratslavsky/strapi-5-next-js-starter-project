# Step 1: Use the official Node.js image as a base image (current LTS version)
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and yarn.lock to install dependencies
COPY package*.json ./
RUN yarn install --production

# Step 4: Copy the rest of the code into the container
COPY . .

# Step 5: Build the frontend for production (assuming it's a Next.js app)
RUN yarn build

# Step 6: Expose the ports for backend (1337 for Strapi) and frontend (3000 for Next.js)
EXPOSE 1337
EXPOSE 3000

# Step 7: Start both Strapi backend and Next.js frontend in production mode
CMD ["yarn", "start"]
