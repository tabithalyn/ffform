import { Form, ListGroup } from "react-bootstrap";
import { FormDataProps } from "./Form";

const Final = ({ formData, setFormData }:FormDataProps) => {
  return (
    <>
    <ListGroup className="my-3">
      <ListGroup.Item><strong>Name:</strong> {formData.name}</ListGroup.Item>
      <ListGroup.Item><strong>Age:</strong> {formData.age}</ListGroup.Item>
      <ListGroup.Item><strong>Email:</strong> {formData.email}</ListGroup.Item>
      <ListGroup.Item><strong>Country:</strong> {formData.country}</ListGroup.Item>
    </ListGroup>
    <Form>
      <Form.Group
        controlId="formFile"
        className="mb-3 d-flex flex-column align-items-start"
      >
        <Form.Label>Is all the above data correct?
          <Form.Check
            type="checkbox"
            key="isDataCorrect"
            checked={formData.isDataCorrect}
            name="is-correct"
            inline
            className="mx-2"
            onChange={() => {
              setFormData({
                ...formData,
                isDataCorrect: !formData.isDataCorrect
              })
            }}
          />
        </Form.Label>
      </Form.Group>
    </Form>
    </>
  );
}
 
export default Final;