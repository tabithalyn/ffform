import { Form } from "react-bootstrap";
import { FormDataProps } from "./Form";

const Signup = ({ formData, setFormData }:FormDataProps) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address
          <Form.Control
            value={formData.email}
            type="email"
            placeholder="Enter email"
            name="email"
            autoComplete="email@email.com"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password
          <Form.Control
            value={formData.password}
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </Form.Label>
      </Form.Group>
    </Form>
  );
}
 
export default Signup;