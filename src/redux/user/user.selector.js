import { createSelector } from "reselect";

const user = state => state.user

export const selectUser = createSelector(
    user, user=> user.currentUser
)