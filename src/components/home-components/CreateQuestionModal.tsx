import React, {useEffect, useState} from "react";
import {Button, Checkbox, Grid, Input, Modal, Text, useModal} from "@nextui-org/react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {setQuestionModal} from "../../redux/slices/app.slice";

export const CreateQuestionModal = () => {
  const dispatch = useDispatch();
  const {createQuestionModal} = useSelector((state: RootState) => state.app);
  const [newQuestion, setNewQuestion] = useState<Question>({
    id: '',
    text: '',
    image: '',
    youtubeUrl: '',
    choices: []
  });
  const [choices, setChoices] = useState<QuestionChoice[]>([]);

  useEffect(() => {
    setNewQuestion({
      ...newQuestion,
      choices: choices
    });
  }, [choices]);

  return (
    <>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={createQuestionModal}
        width={"600px"}
        onClose={() => {
          dispatch(setQuestionModal(false));
        }}
      >
        <Modal.Header>
          <Text h1 id="modal-title" size={18}>
            Create Question
          </Text>
        </Modal.Header>
        <Modal.Body>
          <h4>Question</h4>
          <Input.Textarea
            bordered
            placeholder={"Question content..."}
            size={'lg'}
            onChange={(e) => {
              setNewQuestion({
                ...newQuestion,
                text: e.target.value
              });
            }}
            aria-label={'Question content'}
          />
          <Grid.Container>
            <Grid xs>
              <h4>Choices</h4>
            </Grid>
            <Grid>
              <Button auto light size={"sm"} color="secondary" onClick={() => {
                setChoices([
                  ...choices, {
                    isCorrect: false,
                    text: '',
                    image: '',
                  }
                ])
              }}>
                Add more choice
              </Button>
            </Grid>
          </Grid.Container>
          <Grid.Container gap={1}>
            {choices.map((choice, choiceIndex) => (
              <Grid xs={12} style={{padding: 0, marginBottom: 16}} key={choiceIndex}>
                <div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
                  <Input
                    aria-label={'Choice content'}
                    value={choice.text}
                    onChange={(e) => {
                      let newChoices = choices;
                      newChoices[choiceIndex].text = e.target.value;
                      setChoices([...newChoices]);
                      setNewQuestion({
                        ...newQuestion,
                        choices,
                      })
                    }}
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Choice Content..."
                  />
                  <div style={{marginLeft: 10}}>
                    <Button
                      light={!choice.isCorrect}
                      color={"success"}
                      size={"sm"}
                      auto
                      onPress={() => {
                        setChoices([
                          ...choices.map((x, i) => {
                            if (i === choiceIndex) x.isCorrect = !x.isCorrect;
                            return x;
                          })
                        ])
                      }}
                    >
                      Correct
                    </Button>
                  </div>
                  <div style={{marginLeft: 10}}>
                    <Button
                      light
                      color={"error"}
                      size={"sm"}
                      auto
                      onPress={() => {
                        setChoices([
                          ...choices.filter((_x, i) => i !== choiceIndex)
                        ])
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid.Container>
          <Button auto color="primary" onPress={() => {
            console.log("ok")
            console.log(newQuestion);
          }}>
            Finish
          </Button>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}
