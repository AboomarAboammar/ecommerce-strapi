import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const LangMode = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "arabic"
  );

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <Form.Select
        size="sm"
        value={selectedLanguage}
        onChange={handleChange}
        aria-label="Default select example"
        className="no-border-outline"
      >
        <option value="arabic">AR</option>
        <option value="english">EN</option>
      </Form.Select>
    </div>
  );
};

export default LangMode;
