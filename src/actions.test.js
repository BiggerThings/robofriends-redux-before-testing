import * as actions from './actions';
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

import { apiCall } from './api/api';
import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';

const mockStore = configureStore([thunk]);

describe('actions', () => {
    const store = mockStore();
    it('should create an action to search robots', () => {
        const text = 'woo';

        const expectedAction = {
            type: CHANGE_SEARCHFIELD,
            payload: text
        }
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    })

    it('should create actions to request robots (API)', () => {

        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        }
        expect(action[0]).toEqual(expectedAction);

    })
})