`docker build . -t nameYouWantOfImage` => Create a Docker image.

`docker run nameOfImage` => Run a container.

`docker run -p PORT:PORT nameOfImage` => Run a container with port mapping.

`docker run -p PORT(where you want to access your applictaion):PORT(Where your applictaion run in docker)`

Eg => `docker run -p 8080:3000`

`docker ps` => List running containers.

`docker stop containerId` => Stop a running container.

`docker ps -a` => List all containers (running and stopped).

`docker rm containerId` => Remove a container.
