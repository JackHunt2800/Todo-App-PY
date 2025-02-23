FROM node:18
WORKDIR /app
ARG Todo_URL
ENV Todo_URL $Todo_URL
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
