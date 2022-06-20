import React from "react";
import {HomeBanner} from "../../../components/home-components/HomeBanner";
import {Grid, Spacer} from "@nextui-org/react";
import {FeatureCard} from "../../../components/home-components/FeatureCard";
import {GitHubCard} from "../../../components/home-components/GitHubCard";

export const LandingPage = () => {
  return (
    <>
      <HomeBanner/>
      <Spacer y={2}/>
      <Grid.Container gap={2} justify="flex-start">
        <Grid xs={12} sm={3}>
          <FeatureCard
            href={"/create"}
            tag={"Feature"}
            title={"Create Contest"}
            backgroundImage={"https://www.leaderinme.org/wp-content/uploads/2019/06/AdobeStock_155566276SM.jpg"}
          />
        </Grid>
        <Grid xs={12} sm={3}>
          <FeatureCard
            href={"/join"}
            tag={"Feature"}
            title={"Join Contest"}
            backgroundImage={"https://www.leaderinme.org/wp-content/uploads/2019/06/AdobeStock_155566276SM.jpg"}
          />
        </Grid>
        <Grid xs>
          <GitHubCard/>
        </Grid>
      </Grid.Container>
    </>
  )
}
