import React from "react";
import {Card, Col, Text} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";

export interface FeatureCardProps {
  tag: string,
  title: string,
  backgroundImage: string,
  href?: string
}

export const FeatureCard = ({tag, title, backgroundImage, href}: FeatureCardProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Card isHoverable isPressable={!!href} onPressEnd={() => {
        if (!!href) navigate(href);
      }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
              {tag}
            </Text>
            <Text h3 color="white">
              {title}
            </Text>
          </Col>
        </Card.Header>
        <Card.Image
          src={backgroundImage}
          objectFit="cover"
          width="100%"
          height={340}
          alt="Card image background"
        />
      </Card>
    </>
  )
}
