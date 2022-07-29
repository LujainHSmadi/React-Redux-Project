import {
 LOGIN

} from "../actions/types";
const initialState = [];
function Reducer(Auth = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return (
        [...Auth, payload]
      );
  }
}
export default Reducer;