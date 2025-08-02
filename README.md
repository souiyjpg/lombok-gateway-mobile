
Built by https://www.blackbox.ai

---

# Lombok Gateway Mobile

## Project Overview
Lombok Gateway Mobile is a React Native application designed to showcase travel packages and information about Lombok, Indonesia. It features a modern and intuitive UI powered by React Navigation, allowing users to seamlessly explore different sections such as home, package details, destinations, gallery, and contact information.

## Installation
To install the Lombok Gateway Mobile project, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/lombokgateway-mobile.git
   cd lombokgateway-mobile
   ```

2. **Install dependencies**
   Make sure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) installed. Run:
   ```bash
   npm install
   ```

3. **Run the application**
   Make sure you have the Expo CLI installed. If you haven’t installed it yet, you can do so via:
   ```bash
   npm install -g expo-cli
   ```
   Then you can start the application with:
   ```bash
   npm start
   ```

## Usage
Once the application is running, you will be able to navigate through the various screens of the app:

- **Home Screen**: Main landing page showcasing travel packages.
- **Package Details Screen**: Detailed information about specific packages.
- **Destinations Screen**: List of travel destinations.
- **Gallery Screen**: View a gallery of photos from Lombok.
- **Contact Screen**: Contact information for inquiries.

Simply click on the respective options to navigate between screens.

## Features
- **Navigation**: Smooth navigation between different screens using React Navigation.
- **Responsive Design**: Optimized for performance on iOS and Android devices.
- **User-friendly Interface**: Intuitive design that simplifies user interactions.

## Dependencies
This project has the following key dependencies that support its functionality:

```json
{
  "@expo/webpack-config": "^18.0.1",
  "@react-navigation/native": "^6.1.6",
  "@react-navigation/native-stack": "^6.9.12",
  "expo": "~48.0.18",
  "react": "18.2.0",
  "react-native": "0.71.8",
  "react-native-gesture-handler": "~2.9.0",
  "react-native-safe-area-context": "4.5.0",
  "react-native-screens": "~3.20.0",
  "typescript": "^4.9.4"
}
```

For a complete list of dependencies, refer to the `package.json` file.

## Project Structure
Here is a brief outline of the general project structure:

```
/lombokgateway-mobile
|-- /screens               # Contains the various screen components
|   |-- HomeScreen.tsx     # Home screen component
|   |-- PackageDetailsScreen.tsx # Package details screen component
|   |-- DestinationsScreen.tsx # Destinations screen component
|   |-- ContactScreen.tsx   # Contact screen component
|   |-- GalleryScreen.tsx    # Gallery screen component
|
|-- App.tsx                # The main application component
|-- package.json            # Project metadata and dependencies
|-- package-lock.json       # Lock file for dependencies versions
```

## Contributing
Contributions are welcome! If you would like to contribute to this project, please fork the repository and open a pull request with your changes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.