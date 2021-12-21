/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateFavorite: OnCreateFavoriteSubscription;
  onUpdateFavorite: OnUpdateFavoriteSubscription;
  onDeleteFavorite: OnDeleteFavoriteSubscription;
};

export type CreateFavoriteInput = {
  id?: string | null;
  name: string;
  pokemon?: string | null;
  pokemonPicture?: string | null;
};

export type ModelFavoriteConditionInput = {
  name?: ModelStringInput | null;
  pokemon?: ModelStringInput | null;
  pokemonPicture?: ModelStringInput | null;
  and?: Array<ModelFavoriteConditionInput | null> | null;
  or?: Array<ModelFavoriteConditionInput | null> | null;
  not?: ModelFavoriteConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Favorite = {
  __typename: "Favorite";
  id: string;
  name: string;
  pokemon?: string | null;
  pokemonPicture?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFavoriteInput = {
  id: string;
  name?: string | null;
  pokemon?: string | null;
  pokemonPicture?: string | null;
};

export type DeleteFavoriteInput = {
  id: string;
};

export type ModelFavoriteFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  pokemon?: ModelStringInput | null;
  pokemonPicture?: ModelStringInput | null;
  and?: Array<ModelFavoriteFilterInput | null> | null;
  or?: Array<ModelFavoriteFilterInput | null> | null;
  not?: ModelFavoriteFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelFavoriteConnection = {
  __typename: "ModelFavoriteConnection";
  items: Array<Favorite>;
  nextToken?: string | null;
};

export type CreateFavoriteMutation = {
  __typename: "Favorite";
  id: string;
  name: string;
  pokemon?: string | null;
  pokemonPicture?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFavoriteMutation = {
  __typename: "Favorite";
  id: string;
  name: string;
  pokemon?: string | null;
  pokemonPicture?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFavoriteMutation = {
  __typename: "Favorite";
  id: string;
  name: string;
  pokemon?: string | null;
  pokemonPicture?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetFavoriteQuery = {
  __typename: "Favorite";
  id: string;
  name: string;
  pokemon?: string | null;
  pokemonPicture?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListFavoritesQuery = {
  __typename: "ModelFavoriteConnection";
  items: Array<{
    __typename: "Favorite";
    id: string;
    name: string;
    pokemon?: string | null;
    pokemonPicture?: string | null;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type OnCreateFavoriteSubscription = {
  __typename: "Favorite";
  id: string;
  name: string;
  pokemon?: string | null;
  pokemonPicture?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFavoriteSubscription = {
  __typename: "Favorite";
  id: string;
  name: string;
  pokemon?: string | null;
  pokemonPicture?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFavoriteSubscription = {
  __typename: "Favorite";
  id: string;
  name: string;
  pokemon?: string | null;
  pokemonPicture?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateFavorite(
    input: CreateFavoriteInput,
    condition?: ModelFavoriteConditionInput
  ): Promise<CreateFavoriteMutation> {
    const statement = `mutation CreateFavorite($input: CreateFavoriteInput!, $condition: ModelFavoriteConditionInput) {
        createFavorite(input: $input, condition: $condition) {
          __typename
          id
          name
          pokemon
          pokemonPicture
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFavoriteMutation>response.data.createFavorite;
  }
  async UpdateFavorite(
    input: UpdateFavoriteInput,
    condition?: ModelFavoriteConditionInput
  ): Promise<UpdateFavoriteMutation> {
    const statement = `mutation UpdateFavorite($input: UpdateFavoriteInput!, $condition: ModelFavoriteConditionInput) {
        updateFavorite(input: $input, condition: $condition) {
          __typename
          id
          name
          pokemon
          pokemonPicture
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFavoriteMutation>response.data.updateFavorite;
  }
  async DeleteFavorite(
    input: DeleteFavoriteInput,
    condition?: ModelFavoriteConditionInput
  ): Promise<DeleteFavoriteMutation> {
    const statement = `mutation DeleteFavorite($input: DeleteFavoriteInput!, $condition: ModelFavoriteConditionInput) {
        deleteFavorite(input: $input, condition: $condition) {
          __typename
          id
          name
          pokemon
          pokemonPicture
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFavoriteMutation>response.data.deleteFavorite;
  }
  async GetFavorite(id: string): Promise<GetFavoriteQuery> {
    const statement = `query GetFavorite($id: ID!) {
        getFavorite(id: $id) {
          __typename
          id
          name
          pokemon
          pokemonPicture
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFavoriteQuery>response.data.getFavorite;
  }
  async ListFavorites(
    filter?: ModelFavoriteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFavoritesQuery> {
    const statement = `query ListFavorites($filter: ModelFavoriteFilterInput, $limit: Int, $nextToken: String) {
        listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            pokemon
            pokemonPicture
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFavoritesQuery>response.data.listFavorites;
  }
  OnCreateFavoriteListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFavorite">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFavorite {
        onCreateFavorite {
          __typename
          id
          name
          pokemon
          pokemonPicture
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFavorite">>
  >;

  OnUpdateFavoriteListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFavorite">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFavorite {
        onUpdateFavorite {
          __typename
          id
          name
          pokemon
          pokemonPicture
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFavorite">>
  >;

  OnDeleteFavoriteListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFavorite">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFavorite {
        onDeleteFavorite {
          __typename
          id
          name
          pokemon
          pokemonPicture
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFavorite">>
  >;
}
