#Clone repository
  git clone https://github.com/JackHunt2800/Todo-App-PY.git
  cd todo-app

  # Run with Docker
  docker-compose up --build
  
#Run backend tests
docker-compose exec backend python -m unittest discover -s tests
