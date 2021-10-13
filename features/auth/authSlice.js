import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
  userId: null,
  bankAccountNo: null,
  status: "",
  isLoading: false,
  isError: false,
};

const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ userId, password }) => {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify({ userId, password }),
    });
    const data = await response.json();

    if (response.status >= 400) {
      throw new Error(data.message);
    }
    return data;
  }
);

const logoutUser = createAsyncThunk("auth/logoutUser", async ({ userId }) => {
  const response = await fetch("http://localhost:3000/api/logout", {
    method: "POST",
    body: JSON.stringify({ userId }),
  });
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message);
  }
  return data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginFromLocalStorage(state, action) {
      state.userId = action.payload;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userId = action.payload.userId;
      state.bankAccountNo = action.payload.bankAccountNo;
      state.status = action.payload.status;
      window.localStorage.setItem("auth", state.userId);
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = action.error.message;
      state.userId = null;
      state.isError = true;
    },
    [logoutUser.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userId = null;
      state.bankAccountNo = null;
      state.status = action.payload.status;
      window.localStorage.removeItem("auth");
    },
    [logoutUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = action.error.message;
      state.isError = true;
    },
  },
});

export default authSlice.reducer;
export { loginUser, logoutUser };
export const { loginFromLocalStorage } = authSlice.actions;
export const userIdSelector = (state) => state.auth.userId;
export const isLoadingSelector = (state) => state.auth.isLoading;
export const isErrorSelector = (state) => state.auth.isError;
export const statusSelector = (state) => state.auth.status;
