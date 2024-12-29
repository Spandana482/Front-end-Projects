# Weather App with JavaScript

This is a simple Weather App built using **HTML**, **CSS**, and **JavaScript**. It fetches real-time weather data for any location using the OpenWeather API and displays the temperature, weather conditions, humidity, and wind speed in a user-friendly interface.

---

## Features

- Search for weather information by city.
- Displays:
  - Current Temperature (in Celsius)
  - Weather Description (e.g., light rain, clear skies, etc.)
  - Humidity Percentage
  - Wind Speed
- Provides feedback if the city is not found.
- Responsive and visually appealing UI.

---

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Open `index.html` in your browser to use the app.

---

## API Key Setup

This app uses the [OpenWeather API](https://openweathermap.org/api) to fetch weather data. To use the app:

1. Sign up at [OpenWeather](https://openweathermap.org/) and get your free API key.
2. Replace the `api_key` variable in the `script.js` file with your API key:
   ```javascript
   const api_key = "YOUR_API_KEY";
   ```

---

## File Structure

```
weather-app/
├── index.html        # Main HTML file
├── style.css         # Stylesheet for the app
├── script.js         # JavaScript logic for fetching and displaying weather data
├── images/           # Folder for icons and assets
│   ├── cloud.png
│   ├── clear.png
│   ├── rain.png
│   ├── mist.png
│   ├── snow.png
│   ├── 404.png
```

---

## Technologies Used

- **HTML**: Structure of the app.
- **CSS**: Styling and layout.
- **JavaScript**: Logic for API calls and dynamic updates.
- **Font Awesome**: Icons for weather conditions.

---

## Known Issues

- If you input an invalid city name, an error message will display.
- The app currently supports weather data for cities only.

---

## Contribution

Contributions are welcome! If you'd like to enhance the app, feel free to fork the repository and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

