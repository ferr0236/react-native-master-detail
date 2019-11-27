import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./screens/Home";
import MovieDetails from "./screens/MovieDetails";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home Page",
        headerStyle: { backgroundColor: "#efefef" }
      }
    },
    MovieDetails: {
      screen: MovieDetails,
      navigationOptions: ({ navigation }) => {
        return { title: navigation.state.params.movie.title };
      }
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "hsl(220, 100%, 80%)" }
    }
  }
);

export default createAppContainer(AppNavigator);
