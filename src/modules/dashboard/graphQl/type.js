import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export const userType = new GraphQLObjectType({
  name: "userType",
  fields: () => ({
    _id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    DOB: { type: GraphQLString },
    mobileNumber: { type: GraphQLString },
    role: { type: GraphQLString },
    profilePic: {
      type: new GraphQLObjectType({
        name: "profilePic",
        fields: () => ({
          secure_url: { type: GraphQLString },
        }),
      }),
    },
    coverPic: {
      type: new GraphQLObjectType({
        name: "coverPic",
        fields: () => ({
          secure_url: { type: GraphQLString },
        }),
      }),
    },
  }),
});

/*******************************************************************************/

export const companyType = new GraphQLObjectType({
  name: "companyType",
  fields: () => ({
    _id: { type: GraphQLID },
    companyName: { type: GraphQLString },
    description: { type: GraphQLString },
    industry: { type: GraphQLString },
    address: { type: GraphQLString },
    numberOfEmployees: { type: GraphQLString },
    companyEmail: { type: GraphQLString },
    HRs: { type: new GraphQLList(userType) },
  }),
});

/*******************************************************************************/
