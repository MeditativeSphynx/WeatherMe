# WeatherMe
Weather app

## Running

### Method 1 - Docker-Compose

For this method, you're going to need to have Docker installed. You can get can
get docker from [here](https://www.docker.com/). I reconmend going through the 
[Get Started](https://docs.docker.com/get-started/) section of Docker's docs.
They will run you through building images and running containers.

Next, you'll need to make sure that you have Docker-Compose too. It should be
included with your download from before. You can run the below statement to 
check your version.

```Powershell
> docker compose version
```

Now that we have checked if our docker compose is ready to roll, we can watch it
do its thing. Docker-Compose will be using the `compose.yaml` file in the root
directory of the project. It will also be using the `compose.yaml` file to 
continue down the rabbit hole, into the project, to use the server's and 
client's `Dockerfile`. At this point, all you need to do is run the following:

```Powershell
> docker compose build
```

This builds the images of the project and makes sure that the two containers,
one for client and the other for the server, can communicate with one another.

Let's bring the containers up now.

```Powershell
> docker compose up
```

With that, you now have the client and server running together and communicating
with one another. All you have to do now is navigate to http://localhost:4200/.

### Method 2 - Better for development

This method requires a few things from you.

#### First - Server

First, you're going to need to `cd` into the `weatherme_server` directory. Once
you're there, you can running the following:

```Powershell
> python -m venv venv
```

This will create the virtual environment for you, so you don't have to install 
all of the dependencies globally.

Let's activate that virtual environment.

```Powershell
> ./venv/Scripts/activate
(venv) > Your prompt should look like this now...
```

You may need to update your virtual environment's package manager, `pip`.

```Powershell
> python -m pip install --upgrade pip
```

It's time to install our dependencies.

```Powershell
> pip install -r requirements.txt
```

The required API keys must be saved to your Environment Variables on your 
machine. Luckily you don't have to do that manually, all you need to do is 
uncomment a couple lines in `weather.py`. This section will look like this:

```Python
# For development, uncomment the two keys below. Be sure to remove them
# before deploying to production.
# os.environ['IPSTACK_KEY'] = '2de799aa7783332f9eb3db86d67496f1'
# os.environ['WEATHER_KEY'] = '5dc4e6b937174251beb233810232208'
```

Once you have that finished, you can run the server.

```Powershell
> flask --app wmserver.py run
```

Congratulations! You set up the development server.


#### Second - Client

We have our server up but we don't have a neat way to look at what it is sending
us. Therefore, we need to get the client up and running. I'm going to need you 
to navigate to the `weatherme_client` directory.

You're going to need [Node.js](https://nodejs.org/en/download) for the next 
steps.

To install the client all you need to do is run the following:

```Powershell
> npm ci
```

Once it is finished all you need to do is `ng serve` to run the client.

With that, you now have the client and server running together and communicating
with one another. All you have to do now is navigate to http://localhost:4200/.