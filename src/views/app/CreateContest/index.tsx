import React from "react";
import {Button, Col, Grid, Spacer, Text} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import {CreateContestForm} from "../../../components/home-components/CreateContestForm";

export const CreateContest = () => {
  return (
    <>
      <Spacer y={2}/>
      <div className={"content-container"}>
        <div>
          <Text h3>
            Create Contest
          </Text>
          <Text className={"dark-hoverable"}>
            Create your own contest.
          </Text>
        </div>
        <Spacer y={2}/>
        <CreateContestForm/>
      </div>
    </>
  );
}
