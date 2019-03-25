import React from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Footer,
  Col
} from "native-base";

import CardCof from "./CardCof";
import { white } from "ansi-colors";

export default class App extends React.Component {
  render() {
    let height = 350;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="camera" />
            </Button>
          </Left>

          <Body>
            <Title>InstaCoffee</Title>
          </Body>

          <Right>
            <Button transparent>
              <Icon name="md-locate" />
            </Button>
          </Right>
        </Header>

        <Content>
          <CardCof />
        </Content>

        <Footer>
          <Left>
            <Button transparent>
              <Icon size={30} color={"#fff"} name="heart" />
            </Button>
          </Left>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  TextContainer: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

const textStyles = StyleSheet.create({});
