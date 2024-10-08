# Challenge

## Overview
This project includes:

**Laravel API** for backend <br>
**Nuxt.js** frontend client <br>
**MySQL** database <br>
**Nginx** for reverse proxy <br>
**Docker** for containerization <br>
**GitHub Actions** for CI/CD

### Setup Instructions
**Prerequisites**
#### Install Docker 
https://docs.docker.com/engine/install/

#### Docker Compose 
https://docs.docker.com/compose/install/

**Clone the repo**

##### Environment Configuration <br>

Update the api/.env and docker-compose.yml file with your db configurations

### Run the Application
**Build and start the containers**<br>
docker-compose up --build

**Access the application** <br>
https://localhost (port 433)

### CI/CD with GitHub Actions <br>
This project contains a GitHub Actions workflow that:
- Builds the images on push to the main branch
- Push the images to Docker hub registry

Make sure to add the following GitHub Secrets:
- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN











