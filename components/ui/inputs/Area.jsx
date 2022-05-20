import React from "react";
import { Textarea } from "@chakra-ui/react";

function Area({ value, setValue, name, placeholder, isError }) {
  const setError = isError ? true : false;
  const handleChange = (e) => setValue(e.target.value);

  return (
    <Textarea
      value={value}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      isInvalid={setError}
      resize="none"
      fontSize="0.89rem"
      borderColor="#37607e"
      _hover={{ borderColor: "#37607e" }}
      maxW="100%"
      rows={6}
    />
  );
}

export default Area;
