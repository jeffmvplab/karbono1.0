import { LocalStorageProtocol } from '@/protocols/cache/local_cache';
import { StorageKeysEnum } from '@/utilities/enums';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const localStorage = new LocalStorageProtocol();

export interface CountActionsUserState {
    searchCount: number,
    viewPerfilCount: number,
    viewMoreCount: number,
    showModal: boolean
}


function getFormLocalStorage(): CountActionsUserState {
    const countActionsUser = localStorage.get(StorageKeysEnum.countActionsUser);
    // console.log('cart (localStroage): ', cart);
    if (countActionsUser === null)
        return {
            searchCount: 0,
            viewPerfilCount: 0,
            viewMoreCount: 0,
            showModal: false,
        };
    return {
        ...countActionsUser as CountActionsUserState,
        showModal: false,
    };
}

export const CountActionsUserEmptyState: CountActionsUserState = getFormLocalStorage();



export const countActionsUserSlice = createSlice({
    name: 'count_actions_user',
    initialState: CountActionsUserEmptyState,
    reducers: {
        // Payload se refiere al estado de la authtenticacion
        addSearchCount: (state: CountActionsUserState, { payload }: PayloadAction<boolean>) => {
            state.searchCount++;
            if (state.searchCount > 5 && !payload) {
                state.showModal = true;
            }
            else {
                state.showModal = false;
            }
            localStorage.set(StorageKeysEnum.countActionsUser, state);
        },

        onlyAddSearchCount: (state: CountActionsUserState, { payload }: PayloadAction<boolean>) => {
            state.searchCount++;
            if (state.searchCount > 5 && !payload) {
            }
            else {
                state.showModal = false;
            }
            localStorage.set(StorageKeysEnum.countActionsUser, state);
        },

        addViewPerfilCount: (state: CountActionsUserState, { payload }: PayloadAction<boolean>) => {
            state.viewPerfilCount++;
            if (state.viewPerfilCount > 5 && !payload) {
                state.showModal = true;
            }
            else {
                state.showModal = false;
            }
            localStorage.set(StorageKeysEnum.countActionsUser, state);
        },

        addViewMoreCount: (state: CountActionsUserState, { payload }: PayloadAction<boolean>) => {
            state.viewMoreCount++;
            if (state.viewMoreCount > 5 && !payload) {
                state.showModal = true;
            }
            else {
                state.showModal = false;
            }
            localStorage.set(StorageKeysEnum.countActionsUser, state);
        },


        openModalCountActionsUser: (state: CountActionsUserState) => {
            state.showModal = true;
        },
        closeModalCountActionsUser: (state: CountActionsUserState) => {
            state.showModal = false;
        }


    }
});

export const { addSearchCount, onlyAddSearchCount, addViewPerfilCount, addViewMoreCount, openModalCountActionsUser, closeModalCountActionsUser } = countActionsUserSlice.actions;

export default countActionsUserSlice.reducer;
