FROM node:latest
EXPOSE 8000

# At the end, set the user to use when running this image

RUN mkdir /usr/src/app
RUN chown node:node /usr/src/app

WORKDIR /usr/src/app
USER node
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]
