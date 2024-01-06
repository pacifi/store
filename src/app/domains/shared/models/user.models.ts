export interface UserModels {
  "id": number,
  "email": string,
  "password": string,
  "name": string,
  "role": string,
  "avatar": string,
}

export interface UserModelsDtoCreate extends Omit<UserModels, 'id' | 'role'> {

}

export interface UserModelsDtoUpdate extends Partial<UserModelsDtoCreate> {
  "role"?: string
}
