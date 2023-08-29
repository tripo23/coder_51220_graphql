import express from "express";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

import userModel from "./models/user.dbmodel.js";


const UserType = new GraphQLObjectType({
    name: "User",
    
    fields: {
        _id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        userName: { type: GraphQLString },
        password: { type: GraphQLString },
        gender: { type: GraphQLString },
        avatar: { type: GraphQLString },
    }
});

const QueryType = new GraphQLObjectType({
    name: "Query",
    
    fields: {
        users: {
            type: new GraphQLList(UserType),
            
            resolve: async () => {
                try {
                    const users = await userModel.find();
                    return users;
                } catch (error) {
                    throw new Error("Error al recuperar usuarios");
                }
            },
        },
    },
});

const schema = new GraphQLSchema({ query: QueryType });

const app = express();
app.use("/gql/users", graphqlHTTP({ schema: schema, graphiql: true }));
app.all("*", (req, res) => res.status(200).send('Este servidor opera con Graphql, único endpoint habilitado: /gql/users'));

app.listen(process.env.APP_PORT, () => {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`Server running OK on port ${process.env.APP_PORT}`);
});
