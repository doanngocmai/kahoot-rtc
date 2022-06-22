import React, {useState} from "react";
import {Button, Col, Grid, Input, Row, Spacer, Table, Text, Tooltip} from "@nextui-org/react";
import {CreateQuestionModal} from "./CreateQuestionModal";
import {setQuestionModal} from "../../redux/slices/app.slice";
import {useDispatch} from "react-redux";

export const CreateContestForm = () => {
  const dispatch = useDispatch();
  const columns = [
    { name: "ID", uid: "id" },
    { name: "Text", uid: "text" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const renderCell = (question: Question, columnKey: keyof Question) => {
    const cellValue = question[columnKey];
    switch (columnKey) {
      case "id":
        return cellValue;
      case "text":
        return cellValue;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                D
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                E
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user")}
              >
                DD
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };

  return (
    <div>
      <Grid.Container alignItems={"flex-start"}>
        <Grid xs={12} sm={8}>
          <Input
            width={'100%'}
            label={'Contest Name'}
            aria-label={'Contest Name'}
            aria-labelledby={'Contest Name'}
            placeholder={'Contest name...'}
          />
        </Grid>
      </Grid.Container>
      <Spacer y={2}/>

      <Grid.Container alignItems={"flex-start"}>
        <Grid xs={12} sm={8}>
          <div style={{width: '100%'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Text h5>
                Select Questions
              </Text>
              <Button size={"sm"} light auto rounded color={"secondary"} onPress={() => {
                dispatch(setQuestionModal(true));
              }}>
                Add Question
              </Button>
            </div>
            <Table
              css={{
                height: "auto",
                minWidth: "100%",
              }}
              sticked
              selectionMode="multiple"
              color="secondary"
            >
              <Table.Header columns={columns}>
                {(column) => (
                  <Table.Column key={column.uid}>{column.name}</Table.Column>
                )}
              </Table.Header>
              <Table.Body items={[]}>
                {(item: Question) => (
                  <Table.Row key={item.id}>
                    {(columnKey: any) => <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>}
                  </Table.Row>
                )}
              </Table.Body>
            </Table>

          </div>
        </Grid>
      </Grid.Container>
      <Spacer y={2}/>

      <CreateQuestionModal/>
    </div>
  )
}
