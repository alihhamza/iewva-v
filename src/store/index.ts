import {InjectionKey} from 'vue'
import {createStore, useStore as baseUseStore, Store} from "vuex";
import auth from "./modules/auth";

// define your typings for the store state
export interface State {
    count: number
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    modules: {
        auth
    }
})

// define your own `useStore` composition function
export function useStore() {
    return baseUseStore(key)
}
