<div style='display: flex; justify-content: center; align-items: center;'>
  <div style='padding-right: 8px; text-align: right;'>
    <span style='font-size: 0.8em; opacity: 0.5;'>Published</span>
    <br />
    March 10, 2024
  </div>
    <img alt='Profile Pic' src='https://i.imgur.com/k0Py8Ex.jpg?1' height='auto' width='50' style='border-radius: 50%;' />
  <div style='padding-left: 8px'>
    <span style='font-size: 0.8em; opacity: 0.5;'>Written By</span>
    <br />
    Ethan Bonsignori
  </div>
</div>

<div style='text-align: center; font-style: italic; margin: 30px 0;'>
A guide on how to Dockerize a Python FastAPI application. I wrote this guide to help you get started with creating and running a Docker image of your FastAPI application following the steps I used to Dockerize my recent FastAPI project, <a href="https://ethanbon.com/projects/uservote" target="_blank">UserVote</a>.
</div>

### Step 1: Set Up Your FastAPI Project

Setup your FastAPI project, if you need help getting started, you can reference their [official documentation](https://fastapi.tiangolo.com/). Your project structure should look something like this:

```plaintext
project-root/
|-- app/
|   |-- main.py
|-- requirements.txt
|-- Dockerfile
|-- everything_else/
```

- `main.py`: Your FastAPI application code.
- `requirements.txt`: List of Python dependencies.

### Step 2: Create a Dockerfile

Create a file named `Dockerfile` in the project root. This file will contain instructions for building the Docker image.

```Dockerfile
# Use an official Python runtime as a base image
FROM python:3.9

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt /app/

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . /app/

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define environment variable
ENV NAME World

# Command to run your application
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Step 3: Define Dependencies

Make sure your `requirements.txt` file includes all the dependencies required for your FastAPI application. Create or update this file in your project root.

```plaintext
fastapi==0.68.0
uvicorn==0.15.0
# Add other dependencies as needed
```

### Step 4: Build the Docker Image

Open a terminal, navigate to your project root, and run the following command to build the Docker image:

```bash
docker build -t your-image-name .
```

Replace `your-image-name` with a suitable name for your Docker image.

### Step 5: Run the Docker Container

After the image is built successfully, you can run a container using the following command:

```bash
docker run -p 8000:8000 your-image-name
```

### Step 6: Access Your FastAPI Application

Visit http://localhost:8000 in your browser or use a tool like `curl` to interact with your FastAPI application running inside the Docker container.

That's it! You have successfully Dockerized your Python FastAPI application. Adjust the Dockerfile and other configuration files based on your specific project requirements.

_Last updated March 10, 2024_
