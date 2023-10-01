import { Form } from "react-bootstrap";
import { FormDataProps } from "./Form";
import { countries } from "../countries";

const PersonalInfo = ({ formData, setFormData }:FormDataProps) => {

  return (
    <Form>
      <Form.Group>
        <Form.Label>Name
          <Form.Control
            type="text"
            value={formData.name}
            placeholder="Name..."
            autoComplete="Name"
            onChange={(e) => {
              setFormData({...formData, name: e.target.value})
            }}
            id="name"
          />
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>Age
          <Form.Control
            type="number"
            id="age"
            value={formData.age}
            min={18}
            max={99}
            placeholder="Age..."
            className="px-3"
            onChange={(e) => {
              setFormData({...formData, age: e.target.value})
            }}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>Country
          <Form.Select
            aria-label="Select Country"
            value={formData.country}
            autoComplete="Country"
            id="country"
            onChange={(e) => {
              setFormData({...formData, country: e.target.value})
            }}>
              <option>Choose your country...</option>
              {countries.map((country, id) => (
                <option value={country.country} key={id}>{country.country}</option>
              ))}
            </Form.Select>
          </Form.Label>
      </Form.Group>
    </Form>
  );
}
 
export default PersonalInfo;