import { Option } from "../types/common";
import { ReactComponent as GenderFemaleIcon } from "icons/gender-female.svg";
import { ReactComponent as GenderMaleIcon } from "icons/gender-male.svg";

export const LANGUAGES: Option[] = [
  {
    value: "EN",
    label: "English",
  },
  {
    value: "RU",
    label: "Русский",
  },
];

export const GENDER: Option[] = [
  { value: "male", label: "male", icon: <GenderMaleIcon /> },
  { value: "female", label: "female", icon: <GenderFemaleIcon /> },
];
