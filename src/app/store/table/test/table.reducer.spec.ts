import { getInitialStateWithContent } from 'src/assets/tests-utils/mock';
import {
  addTableData,
  changeSelectionStatus,
  setAllRowsCount,
  setSelectedRowsCount,
} from '../table.actions';
import { initialState, tableActionReducer } from '../table.reducer';

describe('TableReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'unknown',
      };
      const state = tableActionReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('Add Table Data action', () => {
    it('should add table data into state', () => {
      const content = [...getInitialStateWithContent(1).table.content];
      const newState = {
        ...initialState,
        content: [...content],
      };
      const action = addTableData({ payload: { content } });
      const state = tableActionReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('Change Selection Status action', () => {
    it('should change selection status in state', () => {
      const hasSelection = !initialState.hasSelection;
      const newState = {
        ...initialState,
        hasSelection,
      };
      const action = changeSelectionStatus({ payload: { hasSelection } });
      const state = tableActionReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
      expect(state.hasSelection).not.toEqual(initialState.hasSelection);
    });
  });

  describe('Set All Rows Count action', () => {
    it('should count all rows', () => {
      const allRowsCount = 31;
      const newState = {
        ...initialState,
        allRowsCount,
      };
      const action = setAllRowsCount({ payload: { allRowsCount } });
      const state = tableActionReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('Set Selected Rows Count action', () => {
    it('should count selected rows', () => {
      const selectedRowsCount = 16;
      const newState = {
        ...initialState,
        selectedRowsCount,
      };
      const action = setSelectedRowsCount({ payload: { selectedRowsCount } });
      const state = tableActionReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });
});
