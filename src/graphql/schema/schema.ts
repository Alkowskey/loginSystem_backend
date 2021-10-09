import { gql } from "apollo-server-express";

export default gql`
  """
  All queries of users system
  """
  type UserQuery {
    login(user: UserLoginData!): LoggedInData
    isAdmin: Boolean
    isAdminClaimPossible: Boolean
    displayUser: [String]
  }

  input UserLoginData {
    username: String!
    password: String!
  }

  """
  All mutations of users system
  """
  type UserMutation {
    makeAdmin(username: String!): Boolean
    register(user: UserBasicData!): Boolean
    forgotPassword(username: String!): Boolean
    resetPassword(reset: ResetPassword!): Boolean
    changePassword(changePassword: ChangePassword!): Boolean!
  }

  type LoggedInData {
    token: String
  }

  input UserBasicData {
    username: String!
    password: String!
  }

  input ResetPassword {
    token: String!
    newPassword: String!
  }

  input ChangePassword {
    password: String!
    newPassword: String!
  }
  schema {
    query: UserQuery
    mutation: UserMutation
  }
`;
