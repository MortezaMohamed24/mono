export type UserNative = 
  | UserNativeIdle
  | UserNativeFailed
  | UserNativeLoading
  | UserNativeSucceeded


export type UserNativeIdle = {
  $error: null;
  $status: "idle";
}

export type UserNativeFailed = {
  $error: string;
  $status: "failed";
}

export type UserNativeLoading = {
  $error: null;
  $status: "loading";
}

export type UserNativeSucceeded = {
  id: string;
  avatar: string | null;
  $error: null;
  $status: "succeeded";
  idBoards: string[];
  initials: string;
  username: string;
  lastname: string;
  firstname: string;
}


export default UserNative;