import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./Pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ApolloProvider>
);
