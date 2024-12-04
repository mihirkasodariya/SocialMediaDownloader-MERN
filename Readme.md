# MIHIR - Video Downloader Web App

**MIHIR** is a powerful web application designed to effortlessly download publicly accessible videos from popular social media platforms such as Twitter, YouTube, Facebook, and Instagram. It features a robust backend built in Node.js and a responsive frontend developed with React.js, ensuring a seamless and user-friendly experience.

![demo image]
![Screenshot 2024-12-04 164944](https://github.com/user-attachments/assets/ae63fc84-5857-405d-b16e-4c884ed9ea24)


## Live Demo

You can try out the live version of MIHIR here:  
[MIHIR Live Demo](https://MIHIR.netlify.app/)

## Features

- Download videos from **Twitter**, **YouTube**, **Facebook**, and **Instagram**.
- Backend powered by **Node.js** for efficient video fetching.
- **React.js** frontend that is responsive and easy to use.
- Fast and intuitive video download process.
  
## Installation

To set up the application locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/shuvra-matrix/SOCIAL-MEDIA-VIDEO-DOWNLOAD---MERN.git
```

### Install Server Dependencies
Navigate to the server folder and install the necessary dependencies:
```bash
cd ./server
npm install
```

### Set Up Environment Variables
Create a .env file in the server folder with the following keys:
```bash
Copy code
YT_API_KEY=your_youtube_api_key
TW_API_KEY=your_twitter_api_key
FB_API_KEY=your_facebook_api_key
IG_API_KEY=your_instagram_api_key
```
You can obtain the API keys from the respective services.

### Start the Server
Run the following command to start the server:
```bash
Copy code
npm start
This will start the backend, and it will be available at http://localhost:3030.
```
### Install Frontend Dependencies
Navigate to the public folder and install the frontend dependencies:
```bash
Copy code
cd ./public
npm install
```

### Start the React App
Run the following command to start the frontend:
``` bash
Copy code
npm start
```
The frontend will now be accessible at http://localhost:3000.

### External APIs
To integrate video downloading functionality, you will need the following APIs:
YouTube Video Download API
Twitter Video Download API
Facebook Video Download API
Instagram Video Download API

### Running with Docker (Optional)
If you have Docker and Docker Compose installed, you can run MIHIR using the following steps:

Create a .env file in the server directory with the necessary API keys as mentioned above.

In the root directory of the project, run the following Docker Compose command:

``` bash
Copy code
docker-compose -f ./docker-compose.yaml up
This will build and run the Docker containers, and MIHIR will be accessible at http://localhost:3000.
```

### Usage
Open your web browser and go to `http://localhost:3000` to access the MIHIR app.

Paste the URL of the video you wish to download from Twitter, YouTube, Facebook, or Instagram into the provided input field.

Click the "Download" button, and MIHIR will fetch the video for you.

Once the video is ready, you can download it directly to your device.
