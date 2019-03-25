import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from "native-base";
export default class CardCof extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={require("./coff2.jpg")} />
                <Body>
                  <Text style={{ fontSize: 20 }}>a nice Cup of Coffee</Text>
                  <Text note>April 15, 2019</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={require("./coff2.jpg")}
                  style={{
                    width: 350,
                    height: 200
                  }}
                />
                <Text>
                  Netus potenti platea eu pulvinar eleifend vestibulum, sapien
                  hendrerit posuere justo lacus pellentesque, ipsum tincidunt
                  facilisis convallis maecenas. Cursus imperdiet a nunc dui
                  tortor erat fringilla, hac facilisis praesent vitae sapien
                  mollis sem, mattis fusce ornare ante accumsan est.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="heart" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
