import { createSlice } from "@reduxjs/toolkit"

const homeSlice = createSlice({
  name: "home",
  initialState: {
    message: "这是home页面"
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload
    }
  }
})

export const { changeMessageAction } = homeSlice.actions
export default homeSlice.reducer
