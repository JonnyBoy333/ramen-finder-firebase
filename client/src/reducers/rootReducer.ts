import { combineReducers } from 'redux';
import IStoreState from '../store/IStoreState';
import ramen from './fetchRamenReducer';
import pendingActions from './pendingActionsReducer';
import sessionState from './sessionReducer';



const rootReducer = combineReducers<IStoreState>({
  pendingActions,
  ramen,
  sessionState
})

export default rootReducer;