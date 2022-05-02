//using useContext for implementing light and dark mode
import { createContext, useReducer } from "react";

export const themeContext = createContext();//createContext class will make an object called themeContext

const initialState = { darkMode : false};

const themeReducer =(state, action) => {
     switch (action.type){
     case "toggle":
        return { darkMode: !state.darkMode };
      default:
        return state;
    }
}

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return (
      <themeContext.Provider value={{state, dispatch}}>
          {props.children}
      </themeContext.Provider>
    )
}