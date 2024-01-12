import { useHydrateAtoms } from "jotai/utils"

const HydrateAtoms = ({ initialValues, children }) => {
  // initialising on state with prop on render here
  useHydrateAtoms(initialValues)
  return children
}

export { HydrateAtoms }
