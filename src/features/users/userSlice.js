import { createSlice } from "@reduxjs/toolkit";

// export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   // console.log(users)
//   return users;
// });

// export const userAdded = createAsyncThunk("users/useradded", async (data) => {
//   console.log(data)
//   const response = await fetch("https://jsonplaceholder.typicode.com/users",{
//     method:"POST",
//     headers:{
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
//   const users = await response.json();
//   console.log(users)
//   return users;
// });

// export const userUpdated = createAsyncThunk("users/fetchUsers", async (data) => {
//   console.log(data.id)
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/",{
//   method: 'PUT',
//   body: JSON.stringify({name:data.name,email:data.email}),
//   headers: {
//     Accept:"application/json",
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// });
//   const users = await response.json();
//   console.log(users)
//   return users;
// });

// export const userDeleted = createAsyncThunk("users/userDeleted", async ({id}) => {
//    await fetch('https://jsonplaceholder.typicode.com/users/'+id, {
//     method: 'DELETE',
//   });
// });

const allusers = [
  {
    id: 1,
    name: "Anilkumar",
    email: "Ani123@gmail.com",
  },
  {
    id: 2,
    name: "Preet",
    email: "Preetr@gmail.com",
  },
  {
    id: 3,
    name: "Sammi Kaur",
    email: "Kure6@gmail.com",
  },
  {
    id: 4,
    name: "Jass Preet",
    email: "Jassji23@gmail.com",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: allusers,
    loading: false,
  },
  reducers: {
    adduser(state, action) {
      const data = {
        id: allusers.length + 1,
        name: action.payload.name,
        email: action.payload.email,
      };
      state.entities.push(data);
    },
    edituser(state, action) {
      let obj = state.entities?.findIndex((obj => obj.id == action?.payload?.id));
      console.log(obj,"obj")
       state.entities[obj].id=action.payload.id;
       state.entities[obj].name=action.payload.name;
       state.entities[obj].email=action.payload.email;
    },
    deleteuser(state,action){
     const data= state.entities.filter((obj) => obj.id !== action.payload);
     state.entities=data
    }
  },
  // extraReducers: {
  //   [fetchUsers.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [fetchUsers.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.entities = [...action.payload];
  //   },
  //   [fetchUsers.rejected]: (state, action) => {
  //     state.loading = false;
  //   },
  //   [userAdded.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [userAdded.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.entities = [...state.entities,action.payload];
  //     console.log(action.payload,"added")
  //   },
  //   [userAdded.rejected]: (state, action) => {
  //     state.loading = false;
  //   },
  //   // [userUpdated.pending]: (state, action) => {
  //   //   state.loading = true;
  //   // },
  //   // [userUpdated.fulfilled]: (state, action) => {
  //   //   console.log(action)
  //   //   state.loading = false;
  //   //   // state.entities = [...state.entities,action.payload];
  //   // },
  //   // [userUpdated.rejected]: (state, action) => {
  //   //   state.loading = false;
  //   // },
  //   [userDeleted.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [userDeleted.fulfilled]: (state, action) => {
  //     // const { id } = action.meta.arg;
  //     state.loading = false;
  //     // state.entities = state.entities.filter((user) => user.id !== id);
  //   },
  //   [userDeleted.rejected]: (state, action) => {
  //     state.loading = false;
  //   },
  // },
});

export const { adduser ,deleteuser,edituser} = usersSlice.actions;

export default usersSlice.reducer;
