

export type ParameterType =
  "NUMBER_IMPUT" |
  "STRING_INPUT" |
  "SLIDER_INT" |
  "SLIDER_FLOAT" |
  "CHECK" |
  "SELECT"
;

export type Parameter = {
  category: string,
  name: string,
  id: string,
  parameterType: ParameterType,
  value?: number | string | boolean,
  minValue?: number,
  maxValue?: number
}