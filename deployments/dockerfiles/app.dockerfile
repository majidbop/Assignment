FROM node:13.14.0

COPY package.json /app/package.json
COPY index.js /app/index.js

COPY . /app/

WORKDIR /app

RUN npm install .
RUN npm run tsc
EXPOSE 80

CMD [ "npm",  "run", "start"]
