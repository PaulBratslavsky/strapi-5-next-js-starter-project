# Step 1: Use the official Node.js image as a base image (current LTS version)
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and yarn.lock to install dependencies
COPY package*.json ./

# Step 4: Install both backend and frontend dependencies
RUN yarn install --production

# Step 5: Copy the rest of the code into the container
COPY . .

# Step 6: Build the frontend for production (Next.js)
RUN cd frontend && yarn install && yarn build

# Step 7: Expose ports for backend (1337) and frontend (3000)
EXPOSE 1337
EXPOSE 3000

# Step 8: Start both Strapi backend and Next.js frontend in production mode
CMD ["yarn", "concurrently", "\"yarn start:backend\"", "\"yarn start:frontend\""]
