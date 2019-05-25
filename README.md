## Problem Question

* Please follow these instructions exactly.  Please write a little program in the language of your choice to query the http://www.omdbapi.com/ OMDB API.  Here’s the requirements:

1.       Command line only – no GUI wanted or needed – please don’t do a GUI
2.       Must run on linux
3.       Any language you choose
4.       Program must accept a command line parameter of a name of a movie.
5.       Program must query the API for a result over the network.
6.       Program must output the Rotten Tomato rating in some useful way to the user at the command line.
7.       Program must be “dockerized” – i.e. the work to make it into a docker container must be present.
8.       All source code for the program and dockerization must be in a git repository
9.       The Git repository must be in your github.com account and publicly accessible (github.com is free for public repos).
10.   You should assume I will clone your repo and test it personally.
11.   You should “think unix philosophy” when you do this and consider how this kind of tool would build your toolbox and let that guide how you build it.
12.   It’s expected that you provide some kind of README explaining your work.

## STEPS FOR COMMAND LINE
* For running this program Node.js must be installed which can be downloaded from given link : [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

* After installing nodejs, clone this project and install required libraries using following commands:
```
  cd <to-project-path>
  npm install
```

* Now run this project using following command :
```
  npm start
```

NOTE : if api key got expired or not working then replace it with new one


## DOCKER SECTION

* Build a image
```
docker build -t <your_name>/node-web-app .
```

* Run a container

```
docker run -t -p 8080:8080 --name api01  -d <your_name>/node-web-app:latest
```

* To get api data for a movie like deadpool
```
docker exec -t api01 npm start
```
