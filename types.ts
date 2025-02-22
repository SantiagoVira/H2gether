export type RDSSA<T> = React.Dispatch<React.SetStateAction<T>>;
export type FriendType = { name: string; drank: number };
export type FriendRequestType = { name: string; incoming: boolean };
export type LogType = { type: number; message: string; time: Date };
