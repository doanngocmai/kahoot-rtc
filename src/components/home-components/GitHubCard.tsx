import React from "react";
import {Button, Card, Col, Row, Text} from "@nextui-org/react";

export const GitHubCard = () => {
  return (
    <>
      <Card isHoverable>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
              And...
            </Text>
            <Text h4 color="white">
              It's open source!
            </Text>
          </Col>
        </Card.Header>
        <Card.Image
          src="https://ashfurrow.com/static/c5971b6d81a0c9b68851a73fb661fda1/background.jpg"
          objectFit="cover"
          width="100%"
          height={340}
          alt="Card image background"
        />
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row>
                <Col span={3} style={{marginRight: 10}}>
                  <Card.Image
                    src="https://nextui.org/images/breathing-app-icon.jpeg"
                    css={{ bg: "black", br: "50%" }}
                    height={40}
                    width={40}
                    alt="Breathing app icon"
                  />
                </Col>
                <Col>
                  <Text color="#d1d1d1" size={12} weight={"bold"}>
                    GitHub Repository
                  </Text>
                  <Text color="#d1d1d1" size={12}>
                    Free to have your own version.
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end">
                <a
                  href={"https://github.com/monokaijs/kahoot-rtc"}
                  target={"_blank"}
                >
                  <Button
                    flat
                    auto
                    rounded
                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                    >
                      Fork Me
                    </Text>
                  </Button>
                </a>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  )
}
