FROM python:3.9
WORKDIR /app
COPY . .
ARG DATABASE_URL
ENV DATABASE_URL $DATABASE_URL
RUN pip install -r requirements.txt
CMD ["python", "app.py"]
