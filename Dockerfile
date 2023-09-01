FROM node:18 as copper-protocol-frontend-prod


RUN apt update && apt upgrade -y
# Create app directory
WORKDIR /home/node/app
RUN chmod +x /home/node/app
RUN chown node: -R /home/node
USER node
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package*.json ./

RUN ls -l && sleep 1 && yarn
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

COPY ./dist ./dist
COPY ./www ./www

USER node

EXPOSE 8080

CMD [ "node", "www/src/index.js" ]
