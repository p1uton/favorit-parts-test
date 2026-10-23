import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

export const PartNumber = ({ onChange }) => {
  const [text, setText] = useState("");

  return (
    <Stack direction="horizontal" gap={3}>
      <Form.Control
        type="text"
        placeholder="Артикул (номер) автозапчасти"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button disabled={!text} onClick={() => onChange(text)}>
        Найти
      </Button>
    </Stack>
  );
};
