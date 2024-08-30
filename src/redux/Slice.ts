import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {SLICE_NAME} from '../constants/Name';

export interface TikTok2024State {
  value: number;
  openModalComment: {isOpen: boolean; data: any};
  openReplyComment: {
    uniqueCode: string;
    uid: number | null;
    name: string | null;
  };
  stoppingVideo: number | null;
}

const initialState: TikTok2024State = {
  value: 0,
  openModalComment: {isOpen: false, data: null},
  openReplyComment: {uniqueCode: '', uid: null, name: null},
  stoppingVideo: null,
};

export const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    openModalComments: (state, action: PayloadAction<any>) => {
      state.openModalComment = {isOpen: true, data: action.payload};
    },
    closeModalComments: state => {
      state.openModalComment = {
        isOpen: false,
        data: [],
      };
    },
    openReplyComments: (
      state,
      action: PayloadAction<{uid: number; name: string}>,
    ) => {
      state.openReplyComment = {
        ...action.payload,
        uniqueCode: new Date().toLocaleString(),
      };
    },
    closeReplyComments: state => {
      state.openReplyComment = {
        uniqueCode: state.openReplyComment.uniqueCode,
        uid: null,
        name: null,
      };
    },
    startStopVideo: (state, action: PayloadAction<number>) => {
      state.stoppingVideo = action.payload;
    },
    stopPauseVideo: state => {
      state.stoppingVideo = null;
    },
  },
});

export const {
  closeModalComments,
  openModalComments,
  closeReplyComments,
  openReplyComments,
  startStopVideo,
  stopPauseVideo,
} = slice.actions;
export default slice.reducer;
