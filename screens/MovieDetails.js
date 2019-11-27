import React from "react";
import { Container, Content, Text } from "native-base";

const MovieDetails = props => {
  const movie = props.navigation.getParam("movie");

  return (
    <Container>
      <Content style={{ padding: 24 }}>
        <Text>{movie.title}</Text>
        <Text>{movie.releaseYear}</Text>
      </Content>
    </Container>
  );
};

export default MovieDetails;
