FROM node:18
WORKDIR /app
RUN git clone https://github.com/PaulBratslavsky/strapi-5-next-js-starter-project.git .
RUN cd backend && yarn install && cd ../frontend && yarn install
RUN cd frontend && yarn build
EXPOSE 1337 3000
CMD ["yarn", "concurrently", "\"cd backend && NODE_ENV=production yarn start\"", "\"cd frontend && yarn start\""]
