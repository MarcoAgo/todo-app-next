import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type App = {
  __typename?: 'App';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  startButton?: Maybe<ComponentAtomButton>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AppEntity = {
  __typename?: 'AppEntity';
  attributes?: Maybe<App>;
  id?: Maybe<Scalars['ID']>;
};

export type AppEntityResponse = {
  __typename?: 'AppEntityResponse';
  data?: Maybe<AppEntity>;
};

export type AppInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  startButton?: InputMaybe<ComponentAtomButtonInput>;
};

export type AppTodo = {
  __typename?: 'AppTodo';
  Intro?: Maybe<ComponentOrganismsTitleDescriptionImage>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AppTodoEntity = {
  __typename?: 'AppTodoEntity';
  attributes?: Maybe<AppTodo>;
  id?: Maybe<Scalars['ID']>;
};

export type AppTodoEntityResponse = {
  __typename?: 'AppTodoEntityResponse';
  data?: Maybe<AppTodoEntity>;
};

export type AppTodoInput = {
  Intro?: InputMaybe<ComponentOrganismsTitleDescriptionImageInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  todos?: Maybe<TodoRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CategoryTodosArgs = {
  filters?: InputMaybe<TodoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  todos?: InputMaybe<TodoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  todos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type Component = {
  __typename?: 'Component';
  createdAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<ComponentAtomImage>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  titleDescriptionImage?: Maybe<ComponentOrganismsTitleDescriptionImage>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ComponentAtomButton = {
  __typename?: 'ComponentAtomButton';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type ComponentAtomButtonInput = {
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
};

export type ComponentAtomImage = {
  __typename?: 'ComponentAtomImage';
  id: Scalars['ID'];
  media_image: UploadFileEntityResponse;
};

export type ComponentAtomImageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAtomImageFiltersInput>>>;
  not?: InputMaybe<ComponentAtomImageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAtomImageFiltersInput>>>;
};

export type ComponentAtomImageInput = {
  id?: InputMaybe<Scalars['ID']>;
  media_image?: InputMaybe<Scalars['ID']>;
};

export type ComponentAtomText = {
  __typename?: 'ComponentAtomText';
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type ComponentAtomTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAtomTextFiltersInput>>>;
  not?: InputMaybe<ComponentAtomTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAtomTextFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentAtomTextInput = {
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

export type ComponentAtomTitle = {
  __typename?: 'ComponentAtomTitle';
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type ComponentAtomTitleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAtomTitleFiltersInput>>>;
  not?: InputMaybe<ComponentAtomTitleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAtomTitleFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentAtomTitleInput = {
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

export type ComponentEntity = {
  __typename?: 'ComponentEntity';
  attributes?: Maybe<Component>;
  id?: Maybe<Scalars['ID']>;
};

export type ComponentEntityResponse = {
  __typename?: 'ComponentEntityResponse';
  data?: Maybe<ComponentEntity>;
};

export type ComponentEntityResponseCollection = {
  __typename?: 'ComponentEntityResponseCollection';
  data: Array<ComponentEntity>;
  meta: ResponseCollectionMeta;
};

export type ComponentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  image?: InputMaybe<ComponentAtomImageFiltersInput>;
  not?: InputMaybe<ComponentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  titleDescriptionImage?: InputMaybe<ComponentOrganismsTitleDescriptionImageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ComponentInput = {
  image?: InputMaybe<ComponentAtomImageInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  titleDescriptionImage?: InputMaybe<ComponentOrganismsTitleDescriptionImageInput>;
};

export type ComponentOrganismsTitleDescriptionImage = {
  __typename?: 'ComponentOrganismsTitleDescriptionImage';
  description?: Maybe<ComponentAtomText>;
  id: Scalars['ID'];
  image?: Maybe<ComponentAtomImage>;
  title?: Maybe<ComponentAtomTitle>;
};

export type ComponentOrganismsTitleDescriptionImageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOrganismsTitleDescriptionImageFiltersInput>>>;
  description?: InputMaybe<ComponentAtomTextFiltersInput>;
  image?: InputMaybe<ComponentAtomImageFiltersInput>;
  not?: InputMaybe<ComponentOrganismsTitleDescriptionImageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOrganismsTitleDescriptionImageFiltersInput>>>;
  title?: InputMaybe<ComponentAtomTitleFiltersInput>;
};

export type ComponentOrganismsTitleDescriptionImageInput = {
  description?: InputMaybe<ComponentAtomTextInput>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<ComponentAtomImageInput>;
  title?: InputMaybe<ComponentAtomTitleInput>;
};

export type ComponentUtilsComponent = {
  __typename?: 'ComponentUtilsComponent';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ComponentUtilsComponentsList = {
  __typename?: 'ComponentUtilsComponentsList';
  componentsList: Enum_Componentutilscomponentslist_Componentslist;
  id: Scalars['ID'];
};

export type ComponentUtilsMetaRepeatableComponent = {
  __typename?: 'ComponentUtilsMetaRepeatableComponent';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  metaImage?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']>;
  preventingIndex?: Maybe<Scalars['Boolean']>;
  structuredData?: Maybe<Scalars['JSON']>;
};

export type ComponentUtilsMetaRepeatableComponentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUtilsMetaRepeatableComponentFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUtilsMetaRepeatableComponentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUtilsMetaRepeatableComponentFiltersInput>>>;
  preventingIndex?: InputMaybe<BooleanFilterInput>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentUtilsMetaRepeatableComponentInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  metaImage?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  preventingIndex?: InputMaybe<Scalars['Boolean']>;
  structuredData?: InputMaybe<Scalars['JSON']>;
};

export type ComponentUtilsSeo = {
  __typename?: 'ComponentUtilsSeo';
  id: Scalars['ID'];
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type ComponentUtilsSeoInput = {
  id?: InputMaybe<Scalars['ID']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentutilscomponentslist_Componentslist {
  Image = 'Image',
  TitleDescriptionPage = 'TitleDescriptionPage'
}

export enum Enum_Menusmenuitem_Target {
  Blank = 'blank',
  Parent = 'parent',
  Self = 'self',
  Top = 'top'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = App | AppTodo | Category | ComponentAtomButton | ComponentAtomImage | ComponentAtomText | ComponentAtomTitle | ComponentOrganismsTitleDescriptionImage | ComponentUtilsComponent | ComponentUtilsComponentsList | ComponentUtilsMetaRepeatableComponent | ComponentUtilsSeo | Homepage | I18NLocale | MenusMenu | MenusMenuItem | Todo | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Homepage = {
  __typename?: 'Homepage';
  createdAt?: Maybe<Scalars['DateTime']>;
  meta?: Maybe<Array<Maybe<ComponentUtilsMetaRepeatableComponent>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentUtilsSeo>;
  titleDescriptionImage?: Maybe<ComponentOrganismsTitleDescriptionImage>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomepageMetaArgs = {
  filters?: InputMaybe<ComponentUtilsMetaRepeatableComponentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomepageEntity = {
  __typename?: 'HomepageEntity';
  attributes?: Maybe<Homepage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse';
  data?: Maybe<HomepageEntity>;
};

export type HomepageInput = {
  meta?: InputMaybe<Array<InputMaybe<ComponentUtilsMetaRepeatableComponentInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentUtilsSeoInput>;
  titleDescriptionImage?: InputMaybe<ComponentOrganismsTitleDescriptionImageInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type MenusMenu = {
  __typename?: 'MenusMenu';
  createdAt?: Maybe<Scalars['DateTime']>;
  items?: Maybe<MenusMenuItemRelationResponseCollection>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type MenusMenuItemsArgs = {
  filters?: InputMaybe<MenusMenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MenusMenuEntity = {
  __typename?: 'MenusMenuEntity';
  attributes?: Maybe<MenusMenu>;
  id?: Maybe<Scalars['ID']>;
};

export type MenusMenuEntityResponse = {
  __typename?: 'MenusMenuEntityResponse';
  data?: Maybe<MenusMenuEntity>;
};

export type MenusMenuEntityResponseCollection = {
  __typename?: 'MenusMenuEntityResponseCollection';
  data: Array<MenusMenuEntity>;
  meta: ResponseCollectionMeta;
};

export type MenusMenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenusMenuFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<MenusMenuItemFiltersInput>;
  not?: InputMaybe<MenusMenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenusMenuFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MenusMenuInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MenusMenuItem = {
  __typename?: 'MenusMenuItem';
  createdAt?: Maybe<Scalars['DateTime']>;
  order?: Maybe<Scalars['Int']>;
  parent?: Maybe<MenusMenuItemEntityResponse>;
  root_menu: MenusMenuEntityResponse;
  target?: Maybe<Enum_Menusmenuitem_Target>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type MenusMenuItemEntity = {
  __typename?: 'MenusMenuItemEntity';
  attributes?: Maybe<MenusMenuItem>;
  id?: Maybe<Scalars['ID']>;
};

export type MenusMenuItemEntityResponse = {
  __typename?: 'MenusMenuItemEntityResponse';
  data?: Maybe<MenusMenuItemEntity>;
};

export type MenusMenuItemEntityResponseCollection = {
  __typename?: 'MenusMenuItemEntityResponseCollection';
  data: Array<MenusMenuItemEntity>;
  meta: ResponseCollectionMeta;
};

export type MenusMenuItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenusMenuItemFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<MenusMenuItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenusMenuItemFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  parent?: InputMaybe<MenusMenuItemFiltersInput>;
  root_menu?: InputMaybe<MenusMenuFiltersInput>;
  target?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type MenusMenuItemInput = {
  order?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['ID']>;
  root_menu?: InputMaybe<Scalars['ID']>;
  target?: InputMaybe<Enum_Menusmenuitem_Target>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type MenusMenuItemRelationResponseCollection = {
  __typename?: 'MenusMenuItemRelationResponseCollection';
  data: Array<MenusMenuItemEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<CategoryEntityResponse>;
  createMenusMenu?: Maybe<MenusMenuEntityResponse>;
  createMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  createTodo?: Maybe<TodoEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteApp?: Maybe<AppEntityResponse>;
  deleteAppTodo?: Maybe<AppTodoEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deleteMenusMenu?: Maybe<MenusMenuEntityResponse>;
  deleteMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  deleteTodo?: Maybe<TodoEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateApp?: Maybe<AppEntityResponse>;
  updateAppTodo?: Maybe<AppTodoEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  updateMenusMenu?: Maybe<MenusMenuEntityResponse>;
  updateMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  updateTodo?: Maybe<TodoEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateMenusMenuArgs = {
  data: MenusMenuInput;
};


export type MutationCreateMenusMenuItemArgs = {
  data: MenusMenuItemInput;
};


export type MutationCreateTodoArgs = {
  data: TodoInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMenusMenuArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMenusMenuItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAppArgs = {
  data: AppInput;
};


export type MutationUpdateAppTodoArgs = {
  data: AppTodoInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHomepageArgs = {
  data: HomepageInput;
};


export type MutationUpdateMenusMenuArgs = {
  data: MenusMenuInput;
  id: Scalars['ID'];
};


export type MutationUpdateMenusMenuItemArgs = {
  data: MenusMenuItemInput;
  id: Scalars['ID'];
};


export type MutationUpdateTodoArgs = {
  data: TodoInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  app?: Maybe<AppEntityResponse>;
  appTodo?: Maybe<AppTodoEntityResponse>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menusMenu?: Maybe<MenusMenuEntityResponse>;
  menusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  menusMenuItems?: Maybe<MenusMenuItemEntityResponseCollection>;
  menusMenus?: Maybe<MenusMenuEntityResponseCollection>;
  todo?: Maybe<TodoEntityResponse>;
  todos?: Maybe<TodoEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAppArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAppTodoArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryHomepageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMenusMenuArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMenusMenuItemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMenusMenuItemsArgs = {
  filters?: InputMaybe<MenusMenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMenusMenusArgs = {
  filters?: InputMaybe<MenusMenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTodoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTodosArgs = {
  filters?: InputMaybe<TodoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Todo = {
  __typename?: 'Todo';
  categories?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TodoCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TodoEntity = {
  __typename?: 'TodoEntity';
  attributes?: Maybe<Todo>;
  id?: Maybe<Scalars['ID']>;
};

export type TodoEntityResponse = {
  __typename?: 'TodoEntityResponse';
  data?: Maybe<TodoEntity>;
};

export type TodoEntityResponseCollection = {
  __typename?: 'TodoEntityResponseCollection';
  data: Array<TodoEntity>;
  meta: ResponseCollectionMeta;
};

export type TodoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TodoFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TodoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TodoFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TodoInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TodoRelationResponseCollection = {
  __typename?: 'TodoRelationResponseCollection';
  data: Array<TodoEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', title: string, description?: string | null, todos?: { __typename?: 'TodoRelationResponseCollection', data: Array<{ __typename?: 'TodoEntity', id?: string | null, attributes?: { __typename?: 'Todo', title: string, description?: string | null } | null }> } | null } | null }> } | null };

export type AppQueryVariables = Exact<{ [key: string]: never; }>;


export type AppQuery = { __typename?: 'Query', app?: { __typename?: 'AppEntityResponse', data?: { __typename?: 'AppEntity', id?: string | null, attributes?: { __typename?: 'App', startButton?: { __typename?: 'ComponentAtomButton', label: string } | null } | null } | null } | null };

export type AppTodoQueryVariables = Exact<{ [key: string]: never; }>;


export type AppTodoQuery = { __typename?: 'Query', appTodo?: { __typename?: 'AppTodoEntityResponse', data?: { __typename?: 'AppTodoEntity', id?: string | null, attributes?: { __typename?: 'AppTodo', Intro?: { __typename?: 'ComponentOrganismsTitleDescriptionImage', title?: { __typename?: 'ComponentAtomTitle', text: string } | null, description?: { __typename?: 'ComponentAtomText', text: string } | null } | null } | null } | null } | null };

export type TitleDescriptionImageFragment = { __typename?: 'Homepage', titleDescriptionImage?: { __typename?: 'ComponentOrganismsTitleDescriptionImage', title?: { __typename?: 'ComponentAtomTitle', text: string } | null, description?: { __typename?: 'ComponentAtomText', text: string } | null, image?: { __typename?: 'ComponentAtomImage', media_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null } | null };

export type HomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageQuery = { __typename?: 'Query', homepage?: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', id?: string | null, attributes?: { __typename?: 'Homepage', seo?: { __typename?: 'ComponentUtilsSeo', metaTitle?: string | null, metaDescription?: string | null } | null, titleDescriptionImage?: { __typename?: 'ComponentOrganismsTitleDescriptionImage', title?: { __typename?: 'ComponentAtomTitle', text: string } | null, description?: { __typename?: 'ComponentAtomText', text: string } | null, image?: { __typename?: 'ComponentAtomImage', media_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null } | null } | null } | null } | null };

export type NavQueryVariables = Exact<{ [key: string]: never; }>;


export type NavQuery = { __typename?: 'Query', menusMenus?: { __typename?: 'MenusMenuEntityResponseCollection', data: Array<{ __typename?: 'MenusMenuEntity', id?: string | null, attributes?: { __typename?: 'MenusMenu', title: string, items?: { __typename?: 'MenusMenuItemRelationResponseCollection', data: Array<{ __typename?: 'MenusMenuItemEntity', attributes?: { __typename?: 'MenusMenuItem', url?: string | null, title: string, target?: Enum_Menusmenuitem_Target | null, order?: number | null } | null }> } | null } | null }> } | null };

export const TitleDescriptionImageFragmentDoc = `
    fragment titleDescriptionImage on Homepage {
  titleDescriptionImage {
    title {
      text
    }
    description {
      text
    }
    image {
      media_image {
        data {
          attributes {
            url
          }
        }
      }
    }
  }
}
    `;
export const GetCategoriesDocument = `
    query getCategories {
  categories {
    data {
      id
      attributes {
        title
        description
        todos {
          data {
            id
            attributes {
              title
              description
            }
          }
        }
      }
    }
  }
}
    `;
export const useGetCategoriesQuery = <
      TData = GetCategoriesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCategoriesQueryVariables,
      options?: UseQueryOptions<GetCategoriesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCategoriesQuery, TError, TData>(
      variables === undefined ? ['getCategories'] : ['getCategories', variables],
      fetcher<GetCategoriesQuery, GetCategoriesQueryVariables>(client, GetCategoriesDocument, variables, headers),
      options
    );
export const AppDocument = `
    query app {
  app {
    data {
      id
      attributes {
        startButton {
          label
        }
      }
    }
  }
}
    `;
export const useAppQuery = <
      TData = AppQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: AppQueryVariables,
      options?: UseQueryOptions<AppQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<AppQuery, TError, TData>(
      variables === undefined ? ['app'] : ['app', variables],
      fetcher<AppQuery, AppQueryVariables>(client, AppDocument, variables, headers),
      options
    );
export const AppTodoDocument = `
    query appTodo {
  appTodo {
    data {
      id
      attributes {
        Intro {
          title {
            text
          }
          description {
            text
          }
        }
      }
    }
  }
}
    `;
export const useAppTodoQuery = <
      TData = AppTodoQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: AppTodoQueryVariables,
      options?: UseQueryOptions<AppTodoQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<AppTodoQuery, TError, TData>(
      variables === undefined ? ['appTodo'] : ['appTodo', variables],
      fetcher<AppTodoQuery, AppTodoQueryVariables>(client, AppTodoDocument, variables, headers),
      options
    );
export const HomepageDocument = `
    query homepage {
  homepage {
    data {
      id
      attributes {
        seo {
          metaTitle
          metaDescription
        }
        ...titleDescriptionImage
      }
    }
  }
}
    ${TitleDescriptionImageFragmentDoc}`;
export const useHomepageQuery = <
      TData = HomepageQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: HomepageQueryVariables,
      options?: UseQueryOptions<HomepageQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<HomepageQuery, TError, TData>(
      variables === undefined ? ['homepage'] : ['homepage', variables],
      fetcher<HomepageQuery, HomepageQueryVariables>(client, HomepageDocument, variables, headers),
      options
    );
export const NavDocument = `
    query nav {
  menusMenus {
    data {
      id
      attributes {
        title
        items {
          data {
            attributes {
              url
              title
              target
              order
            }
          }
        }
      }
    }
  }
}
    `;
export const useNavQuery = <
      TData = NavQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: NavQueryVariables,
      options?: UseQueryOptions<NavQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<NavQuery, TError, TData>(
      variables === undefined ? ['nav'] : ['nav', variables],
      fetcher<NavQuery, NavQueryVariables>(client, NavDocument, variables, headers),
      options
    );