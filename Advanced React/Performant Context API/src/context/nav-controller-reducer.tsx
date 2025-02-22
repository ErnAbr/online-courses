import React, {  useContext, useMemo } from "react";

type State = {
  collapsed: boolean;
};

const defaultState: State = {
  collapsed: false,
};

type Action = { type: "open" | "close" | "toggle" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "open":
      return { ...state, collapsed: true };
    case "close":
      return { ...state, collapsed: false };
    case "toggle":
      return { ...state, collapsed: !state.collapsed };
    default:
      return state;
  }
};

const ContextData = React.createContext({
  collapsed: false,
});

const ContextApi = React.createContext({
  open: () => {},
  close: () => {},
  toggle: () => {},
});

export const useNavData = () => useContext(ContextData);
export const useNavApi = () => useContext(ContextApi);

const NavController = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  const data = useMemo(() => {
    return { collapsed: state.collapsed };
  }, [state]);

  const api = useMemo(() => {
    return {
      open: () => dispatch({ type: "open" }),
      close: () => dispatch({ type: "close" }),
      toggle: () => dispatch({ type: "toggle" }),
    };
  }, []);

  return (
    <ContextData.Provider value={data}>
      <ContextApi.Provider value={api}>{children}</ContextApi.Provider>
    </ContextData.Provider>
  );
};

export default NavController;
