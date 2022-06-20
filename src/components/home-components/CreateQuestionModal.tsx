import React, {useState} from "react";
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
          <Text id="modal-title" size={18}>
            Create Question
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container gap={1}>
            {choices.map((choice, index) => (
              <Grid xs={12}>
                <div style={{display: 'flex', width: '100%'}}>
                  <Input
                    value={choice.text}
                    onChange={(e) => {
                      let newChoices = choices;
                      newChoices[index].text = e.target.value;
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
                    <Checkbox defaultSelected={true} size="sm">
                      Correct?
                    </Checkbox>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid.Container>
          <Button auto bordered color="secondary" onClick={() => {
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
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}
