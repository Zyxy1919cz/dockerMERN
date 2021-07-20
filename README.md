# Docker MERN stack web

My learning full stack web pages with portfilio, forum and login.

## Start
Start development server with `docker-compose up` with additional args `--build` for rebuilding image and `-d` to run docker container in detach mode.

You can view and follow logs with `docker-compose logs -f` command.

Development version of frontend is hosted on [http://localhost:3000](http://localhost:3000) and express api on [http://localhost:5000](http://localhost:5000).
Production server within Nginx is hostet after succesful build process on [http://localhost:8080](http://localhost:8080) .

## Using 

Express as backend.
React and Redux for frontend.
MongoDB as noSQL database.

And for production server Nginx.