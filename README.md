# Weather Dashboard Application

This application fetches and displays the latest weather information for various cities using the OpenWeatherMap API. The UI design provided is implemented with a responsive layout that adjusts to both desktop and mobile resolutions. This application is compatible with the latest versions of Chrome, Firefox, and Safari browsers.

## Features

- Extracts city codes from a provided `cities.json` file.
- Fetches latest weather information from the OpenWeatherMap API.
- Displays weather information in a user-friendly and responsive UI.
- Caches weather data to reduce API calls and improve performance.
- Docker support for easy deployment.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- OpenWeatherMap API Key (You need to register on [OpenWeatherMap](https://openweathermap.org) to get an API key)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/weather-dashboard.git
    cd weather-dashboard
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Obtain your API key from OpenWeatherMap and add it to a `.env` file:
    ```sh
    touch .env
    echo "REACT_APP_API_KEY=your_api_key" >> .env
    ```

4. Download the `cities.json` file from [this link](https://drive.google.com/file/d/1K0wfPEGxghzYO9OqbclsEFvc00XBWgVy/view?usp=sharing) and place it in the `src` directory of the project.

### Running the Application

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

- The application will automatically load city codes from the `cities.json` file.
- It will then fetch the latest weather information for these cities using the OpenWeatherMap API.
- The fetched data is displayed in a responsive UI.
- Weather data is cached for 5 minutes to reduce API calls and improve performance.

## Example

Here is a sample of the weather information fetched and displayed by the application:

```json
{
  "coord": { "lon": 37.62, "lat": 55.75 },
  "sys": { "country": "RU", "sunrise": 1457582106, "sunset": 1457623444 },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "Sky is Clear",
      "icon": "01d"
    }
  ],
  "main": {
    "temp": 7.75,
    "pressure": 1026,
    "humidity": 57,
    "temp_min": 7,
    "temp_max": 9
  },
  "visibility": 10000,
  "wind": { "speed": 3, "deg": 130 },
  "clouds": { "all": 0 },
  "dt": 1457609400,
  "id": 524901,
  "name": "Moscow"
}

```

## ScreenShots

<img src="https://github.com/dumiya123/Weather-Application/blob/master/Screenshots/Screenshot%202024-06-02%20204419.png" alt="weatherapp" height="400" width="800">
