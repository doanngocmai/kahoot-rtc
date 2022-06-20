import React from "react";
import {Button, Text} from "@nextui-org/react";
import {Outlet} from "react-router-dom";

export interface AppLayoutProps {
  children?: any
}

export const AppLayout = ({children}: AppLayoutProps) => {
  return (
    <div className={"app-layout"}>
      <div className={"app-layout__header"}>
        <div className={"app-layout__header--container"}>
          <div className={"app-layout__header__logo"}>
            <Text weight="bold" transform="uppercase">
              KRTC
            </Text>
            <Text className={"app-layout__header__version"} weight={"normal"} size={10}>v1.0</Text>
          </div>
          <div className={"app-layout__header__links"}>
            <Button size={"sm"} color={"secondary"} flat auto rounded>
              Find more
            </Button>
          </div>
        </div>
      </div>
      <div className={"app-layout__container"}>
        <Outlet/>
      </div>
      <div className={"app-layout__footer"}>
        Crafted by <a href={"https://github.com/monokaijs"}>@MonokaiJs</a> with love.
      </div>
    </div>
  )
}
