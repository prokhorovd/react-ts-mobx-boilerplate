import {observable} from "mobx";

export const createStore = () => {
  const store = {
    userNames: observable(['pepe', 'lola', 'bebe']),
    addUser(user: string) {
      store.userNames.push(user);
    },
    get userNamesGetter() {
      return store.userNames;
    }
  };

  return store;
};


export type TStore = ReturnType<typeof createStore>
