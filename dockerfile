# Step 1: Use the official Node.js image as a base image (current LTS version)
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and yarn.lock to install dependencies
COPY package*.json ./
RUN yarn install --production

# Step 4: Copy the rest of the code into the container
COPY . .
name: Build and Deploy to Scaleway (Production)

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3  # V3 verwenden, um auf dem neuesten Stand zu sein

    - name: Set up Node.js 18.x
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: yarn install --production

    - name: Build frontend for production
      run: yarn build

    - name: Log in to Scaleway Container Registry
      uses: docker/login-action@v2
      with:
        registry: rg.fr-par.scw.cloud
        username: ${{ secrets.SCW_ACCESS_KEY }}
        password: ${{ secrets.SCW_SECRET_KEY }}

    - name: Build and push Docker image
      uses: docker/build-push-action@v2
      with:
        push: true
        tags: rg.fr-par.scw.cloud/funcscwnsstupefiedjepsen6godfgyv/strapi-nextjs-app:latest

# Step 5: Build the frontend for production (assuming it's a Next.js app)
RUN yarn build

# Step 6: Expose the ports for backend (1337 for Strapi) and frontend (3000 for Next.js)
EXPOSE 1337
EXPOSE 3000

# Step 7: Start both Strapi backend and Next.js frontend in production mode
CMD ["yarn", "start"]
