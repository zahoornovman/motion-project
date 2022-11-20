export const selectUser = (store) => store.user;
export const selectUsername = (store) => store.user.username;
export const selectRegisterUser = (store) => store.registerUser;
export const selectValidationUser = (store) => store.validateNewUser;
export const selectPosts = (store) => store.posts.list;
export const selectToken = (store) => store.user.token;
