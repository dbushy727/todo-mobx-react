import React from 'react'

import TodoStore from '../stores/TodoStore'

export const storesContext = React.createContext({
  todoStore: new TodoStore(),
});