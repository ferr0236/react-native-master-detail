import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import {
  Container,
  Content,
  Text,
  ListItem,
  Body,
  Right,
  Icon,
  Button
} from "native-base";
import { FlatList } from "react-native";
import { AppLoading } from "expo";

const Home = props => {
  const loadFonts = () => {
    Font.loadAsync({
      Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
  };

  const loadData = () => {
    setLoading(true);
    fetch("https://facebook.github.io/react-native/movies.json")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return { error: "Error" };
      })
      .then(data => {
        setMovies(data.movies);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  };

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
    //loadFonts();
  });

//   if (loading) {
//     return <AppLoading />;
//   }
  return (
    <Container>
      <Content>
        <FlatList
          data={movies}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ListItem>
              <Body>
                <Text>{item.title}</Text>
                <Text>{item.releaseYear}</Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() => {
                    props.navigation.navigate("MovieDetails", { movie: item });
                  }}
                >
                  <Icon name="arrow-forward"></Icon>
                </Button>
              </Right>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  );
  //  }
};

export default Home;
