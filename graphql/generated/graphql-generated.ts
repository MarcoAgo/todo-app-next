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
  AuthorComponentsDynamicZoneInput: any;
  ContactComponentsDynamicZoneInput: any;
  DateTime: any;
  HomepageComponentsDynamicZoneInput: any;
  HomepageSeoDynamicZoneInput: any;
  I18NLocaleCode: any;
  JSON: any;
  Upload: any;
  WhyComponentsDynamicZoneInput: any;
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

export type Author = {
  __typename?: 'Author';
  components?: Maybe<Array<Maybe<AuthorComponentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<AuthorRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AuthorLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type AuthorComponentsDynamicZone = ComponentAtomButton | ComponentAtomImage | ComponentAtomLink | ComponentAtomText | ComponentAtomTitle | ComponentOrganismsHeader | ComponentOrganismsTitleDescriptionImage | ComponentTemplateDefaultPage | Error;

export type AuthorEntity = {
  __typename?: 'AuthorEntity';
  attributes?: Maybe<Author>;
  id?: Maybe<Scalars['ID']>;
};

export type AuthorEntityResponse = {
  __typename?: 'AuthorEntityResponse';
  data?: Maybe<AuthorEntity>;
};

export type AuthorInput = {
  components?: InputMaybe<Array<Scalars['AuthorComponentsDynamicZoneInput']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AuthorRelationResponseCollection = {
  __typename?: 'AuthorRelationResponseCollection';
  data: Array<AuthorEntity>;
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

export type ComponentAtomButton = {
  __typename?: 'ComponentAtomButton';
  id: Scalars['ID'];
  label: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentAtomButtonInput = {
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentAtomImage = {
  __typename?: 'ComponentAtomImage';
  id: Scalars['ID'];
  media_image: UploadFileEntityResponse;
};

export type ComponentAtomImageInput = {
  id?: InputMaybe<Scalars['ID']>;
  media_image?: InputMaybe<Scalars['ID']>;
};

export type ComponentAtomLink = {
  __typename?: 'ComponentAtomLink';
  id: Scalars['ID'];
  label: Scalars['String'];
  url: Scalars['String'];
};

export type ComponentAtomLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAtomLinkFiltersInput>>>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAtomLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAtomLinkFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentAtomText = {
  __typename?: 'ComponentAtomText';
  id: Scalars['ID'];
  text: Scalars['String'];
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

export type ComponentAtomTitleInput = {
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

export type ComponentOrganismsHeader = {
  __typename?: 'ComponentOrganismsHeader';
  id: Scalars['ID'];
  logo?: Maybe<UploadFileEntityResponse>;
  nav_link?: Maybe<Array<Maybe<ComponentAtomLink>>>;
};


export type ComponentOrganismsHeaderNav_LinkArgs = {
  filters?: InputMaybe<ComponentAtomLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentOrganismsHeroOpener = {
  __typename?: 'ComponentOrganismsHeroOpener';
  bg_media: UploadFileEntityResponse;
  description: ComponentAtomText;
  id: Scalars['ID'];
  title: ComponentAtomTitle;
};

export type ComponentOrganismsTitleDescriptionButton = {
  __typename?: 'ComponentOrganismsTitleDescriptionButton';
  componentName: Scalars['String'];
  cta?: Maybe<ComponentAtomButton>;
  description?: Maybe<ComponentAtomText>;
  id: Scalars['ID'];
  title?: Maybe<ComponentAtomTitle>;
};

export type ComponentOrganismsTitleDescriptionImage = {
  __typename?: 'ComponentOrganismsTitleDescriptionImage';
  cta: ComponentAtomButton;
  description: ComponentAtomText;
  id: Scalars['ID'];
  image: ComponentAtomImage;
  title: ComponentAtomTitle;
};

export type ComponentOrganismsTitleDescriptionImageInput = {
  cta?: InputMaybe<ComponentAtomButtonInput>;
  description?: InputMaybe<ComponentAtomTextInput>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<ComponentAtomImageInput>;
  title?: InputMaybe<ComponentAtomTitleInput>;
};

export type ComponentTemplateDefaultPage = {
  __typename?: 'ComponentTemplateDefaultPage';
  id: Scalars['ID'];
  meta?: Maybe<ComponentUtilsMetaRepeatableComponent>;
  seo: ComponentUtilsSeo;
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

export type ComponentUtilsSeo = {
  __typename?: 'ComponentUtilsSeo';
  id: Scalars['ID'];
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  components?: Maybe<Array<Maybe<ContactComponentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ContactRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ContactLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type ContactComponentsDynamicZone = ComponentAtomButton | ComponentAtomImage | ComponentAtomLink | ComponentAtomText | ComponentAtomTitle | ComponentOrganismsHeader | ComponentOrganismsTitleDescriptionImage | ComponentTemplateDefaultPage | Error;

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactInput = {
  components?: InputMaybe<Array<Scalars['ContactComponentsDynamicZoneInput']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ContactRelationResponseCollection = {
  __typename?: 'ContactRelationResponseCollection';
  data: Array<ContactEntity>;
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

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

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

export type GenericMorph = App | AppTodo | Author | Category | ComponentAtomButton | ComponentAtomImage | ComponentAtomLink | ComponentAtomText | ComponentAtomTitle | ComponentOrganismsHeader | ComponentOrganismsHeroOpener | ComponentOrganismsTitleDescriptionButton | ComponentOrganismsTitleDescriptionImage | ComponentTemplateDefaultPage | ComponentUtilsComponent | ComponentUtilsComponentsList | ComponentUtilsMetaRepeatableComponent | ComponentUtilsSeo | Contact | Homepage | I18NLocale | MenusMenu | MenusMenuItem | Todo | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Why;

export type Homepage = {
  __typename?: 'Homepage';
  components?: Maybe<Array<Maybe<HomepageComponentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomepageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<Array<Maybe<HomepageSeoDynamicZone>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomepageLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type HomepageComponentsDynamicZone = ComponentAtomButton | ComponentAtomImage | ComponentAtomLink | ComponentAtomText | ComponentAtomTitle | ComponentOrganismsHeader | ComponentOrganismsHeroOpener | ComponentOrganismsTitleDescriptionButton | ComponentOrganismsTitleDescriptionImage | Error;

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
  components?: InputMaybe<Array<Scalars['HomepageComponentsDynamicZoneInput']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<Array<Scalars['HomepageSeoDynamicZoneInput']>>;
};

export type HomepageRelationResponseCollection = {
  __typename?: 'HomepageRelationResponseCollection';
  data: Array<HomepageEntity>;
};

export type HomepageSeoDynamicZone = ComponentUtilsSeo | Error;

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
  createAuthorLocalization?: Maybe<AuthorEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createContactLocalization?: Maybe<ContactEntityResponse>;
  createHomepageLocalization?: Maybe<HomepageEntityResponse>;
  createMenusMenu?: Maybe<MenusMenuEntityResponse>;
  createMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  createTodo?: Maybe<TodoEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWhyLocalization?: Maybe<WhyEntityResponse>;
  deleteApp?: Maybe<AppEntityResponse>;
  deleteAppTodo?: Maybe<AppTodoEntityResponse>;
  deleteAuthor?: Maybe<AuthorEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deleteMenusMenu?: Maybe<MenusMenuEntityResponse>;
  deleteMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  deleteTodo?: Maybe<TodoEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWhy?: Maybe<WhyEntityResponse>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateApp?: Maybe<AppEntityResponse>;
  updateAppTodo?: Maybe<AppTodoEntityResponse>;
  updateAuthor?: Maybe<AuthorEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  updateMenusMenu?: Maybe<MenusMenuEntityResponse>;
  updateMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  updateTodo?: Maybe<TodoEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWhy?: Maybe<WhyEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationCreateAuthorLocalizationArgs = {
  data?: InputMaybe<AuthorInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateContactLocalizationArgs = {
  data?: InputMaybe<ContactInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHomepageLocalizationArgs = {
  data?: InputMaybe<HomepageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type MutationCreateWhyLocalizationArgs = {
  data?: InputMaybe<WhyInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteAuthorArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteContactArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomepageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type MutationDeleteWhyArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type MutationUpdateAuthorArgs = {
  data: AuthorInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHomepageArgs = {
  data: HomepageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type MutationUpdateWhyArgs = {
  data: WhyInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  audience?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['String']>;
  externalPath?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  items?: Maybe<Array<Maybe<NavigationItem>>>;
  master?: Maybe<Scalars['Int']>;
  menuAttached: Scalars['Boolean'];
  order: Scalars['Int'];
  page_id?: Maybe<Scalars['String']>;
  parent?: Maybe<NavigationItem>;
  path?: Maybe<Scalars['String']>;
  related?: Maybe<NavigationItemRelatedData>;
  title: Scalars['String'];
  type: Scalars['String'];
  uiRouterKey: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['String']>;
};

export type NavigationItemRelated = App | AppTodo | Author | Contact | Homepage | Why;

export type NavigationItemRelatedData = {
  __typename?: 'NavigationItemRelatedData';
  attributes?: Maybe<NavigationItemRelated>;
  id: Scalars['Int'];
};

export enum NavigationRenderType {
  Flat = 'FLAT',
  Rfr = 'RFR',
  Tree = 'TREE'
}

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
  author?: Maybe<AuthorEntityResponse>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  contact?: Maybe<ContactEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menusMenu?: Maybe<MenusMenuEntityResponse>;
  menusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  menusMenuItems?: Maybe<MenusMenuItemEntityResponseCollection>;
  menusMenus?: Maybe<MenusMenuEntityResponseCollection>;
  renderNavigation: Array<Maybe<NavigationItem>>;
  renderNavigationChild: Array<Maybe<NavigationItem>>;
  todo?: Maybe<TodoEntityResponse>;
  todos?: Maybe<TodoEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  why?: Maybe<WhyEntityResponse>;
};


export type QueryAppArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAppTodoArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAuthorArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type QueryContactArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomepageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type QueryRenderNavigationArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  menuOnly?: InputMaybe<Scalars['Boolean']>;
  navigationIdOrSlug: Scalars['String'];
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<NavigationRenderType>;
};


export type QueryRenderNavigationChildArgs = {
  childUiKey: Scalars['String'];
  id: Scalars['String'];
  menuOnly?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<NavigationRenderType>;
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


export type QueryWhyArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
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

export type Why = {
  __typename?: 'Why';
  components?: Maybe<Array<Maybe<WhyComponentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<WhyRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type WhyLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type WhyComponentsDynamicZone = ComponentAtomButton | ComponentAtomImage | ComponentAtomLink | ComponentAtomText | ComponentAtomTitle | ComponentOrganismsHeader | ComponentOrganismsTitleDescriptionImage | ComponentTemplateDefaultPage | ComponentUtilsComponent | ComponentUtilsComponentsList | ComponentUtilsMetaRepeatableComponent | ComponentUtilsSeo | Error;

export type WhyEntity = {
  __typename?: 'WhyEntity';
  attributes?: Maybe<Why>;
  id?: Maybe<Scalars['ID']>;
};

export type WhyEntityResponse = {
  __typename?: 'WhyEntityResponse';
  data?: Maybe<WhyEntity>;
};

export type WhyInput = {
  components?: InputMaybe<Array<Scalars['WhyComponentsDynamicZoneInput']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type WhyRelationResponseCollection = {
  __typename?: 'WhyRelationResponseCollection';
  data: Array<WhyEntity>;
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', title: string, description?: string | null, todos?: { __typename?: 'TodoRelationResponseCollection', data: Array<{ __typename?: 'TodoEntity', id?: string | null, attributes?: { __typename?: 'Todo', title: string, description?: string | null } | null }> } | null } | null }> } | null };

export type TitleFragment = { __typename: 'ComponentAtomTitle', id: string, text: string };

export type HeroOpenerFragment = { __typename: 'ComponentOrganismsHeroOpener', id: string, title: { __typename?: 'ComponentAtomTitle', text: string }, description: { __typename?: 'ComponentAtomText', text: string }, bg_media: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, provider: string, hash: string, formats?: any | null, name: string, height?: number | null, width?: number | null } | null } | null } };

export type TitleDescriptionImageFragment = { __typename: 'ComponentOrganismsTitleDescriptionImage', title: { __typename?: 'ComponentAtomTitle', text: string }, description: { __typename?: 'ComponentAtomText', text: string }, image: { __typename?: 'ComponentAtomImage', media_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, provider: string, hash: string, formats?: any | null, name: string, height?: number | null, width?: number | null } | null } | null } }, cta: { __typename?: 'ComponentAtomButton', label: string, url?: string | null } };

export type AppQueryVariables = Exact<{ [key: string]: never; }>;


export type AppQuery = { __typename?: 'Query', app?: { __typename?: 'AppEntityResponse', data?: { __typename?: 'AppEntity', id?: string | null, attributes?: { __typename?: 'App', startButton?: { __typename?: 'ComponentAtomButton', label: string } | null } | null } | null } | null };

export type AppTodoQueryVariables = Exact<{ [key: string]: never; }>;


export type AppTodoQuery = { __typename?: 'Query', appTodo?: { __typename?: 'AppTodoEntityResponse', data?: { __typename?: 'AppTodoEntity', id?: string | null, attributes?: { __typename?: 'AppTodo', Intro?: { __typename?: 'ComponentOrganismsTitleDescriptionImage', title: { __typename?: 'ComponentAtomTitle', text: string }, description: { __typename?: 'ComponentAtomText', text: string } } | null } | null } | null } | null };

export type AuthorQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type AuthorQuery = { __typename?: 'Query', author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', components?: Array<{ __typename?: 'ComponentAtomButton' } | { __typename?: 'ComponentAtomImage' } | { __typename?: 'ComponentAtomLink' } | { __typename?: 'ComponentAtomText' } | { __typename: 'ComponentAtomTitle', id: string, text: string } | { __typename?: 'ComponentOrganismsHeader' } | { __typename?: 'ComponentOrganismsTitleDescriptionImage' } | { __typename?: 'ComponentTemplateDefaultPage' } | { __typename?: 'Error' } | null> | null } | null } | null } | null };

export type ContactsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type ContactsQuery = { __typename?: 'Query', contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', components?: Array<{ __typename?: 'ComponentAtomButton' } | { __typename?: 'ComponentAtomImage' } | { __typename?: 'ComponentAtomLink' } | { __typename?: 'ComponentAtomText' } | { __typename: 'ComponentAtomTitle', id: string, text: string } | { __typename?: 'ComponentOrganismsHeader' } | { __typename?: 'ComponentOrganismsTitleDescriptionImage' } | { __typename?: 'ComponentTemplateDefaultPage' } | { __typename?: 'Error' } | null> | null } | null } | null } | null };

export type HomepageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type HomepageQuery = { __typename?: 'Query', homepage?: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', attributes?: { __typename?: 'Homepage', components?: Array<{ __typename?: 'ComponentAtomButton' } | { __typename?: 'ComponentAtomImage' } | { __typename?: 'ComponentAtomLink' } | { __typename?: 'ComponentAtomText' } | { __typename?: 'ComponentAtomTitle' } | { __typename?: 'ComponentOrganismsHeader' } | { __typename: 'ComponentOrganismsHeroOpener', id: string, title: { __typename?: 'ComponentAtomTitle', text: string }, description: { __typename?: 'ComponentAtomText', text: string }, bg_media: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, provider: string, hash: string, formats?: any | null, name: string, height?: number | null, width?: number | null } | null } | null } } | { __typename?: 'ComponentOrganismsTitleDescriptionButton' } | { __typename: 'ComponentOrganismsTitleDescriptionImage', title: { __typename?: 'ComponentAtomTitle', text: string }, description: { __typename?: 'ComponentAtomText', text: string }, image: { __typename?: 'ComponentAtomImage', media_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, provider: string, hash: string, formats?: any | null, name: string, height?: number | null, width?: number | null } | null } | null } }, cta: { __typename?: 'ComponentAtomButton', label: string, url?: string | null } } | { __typename?: 'Error' } | null> | null } | null } | null } | null };

export type MainNavigationQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type MainNavigationQuery = { __typename?: 'Query', renderNavigation: Array<{ __typename?: 'NavigationItem', id: number, path?: string | null, title: string, type: string, uiRouterKey: string, page_id?: string | null, items?: Array<{ __typename?: 'NavigationItem', id: number, title: string, path?: string | null, items?: Array<{ __typename?: 'NavigationItem', id: number, title: string, path?: string | null } | null> | null, parent?: { __typename?: 'NavigationItem', path?: string | null, id: number, title: string, type: string, uiRouterKey: string } | null } | null> | null } | null> };

export type GetCurrentNavigationItemQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  path?: InputMaybe<Scalars['String']>;
}>;


export type GetCurrentNavigationItemQuery = { __typename?: 'Query', renderNavigation: Array<{ __typename?: 'NavigationItem', id: number, page_id?: string | null, path?: string | null, title: string, type: string, uiRouterKey: string } | null> };

export type WhyQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type WhyQuery = { __typename?: 'Query', why?: { __typename?: 'WhyEntityResponse', data?: { __typename?: 'WhyEntity', attributes?: { __typename?: 'Why', components?: Array<{ __typename?: 'ComponentAtomButton' } | { __typename?: 'ComponentAtomImage' } | { __typename?: 'ComponentAtomLink' } | { __typename?: 'ComponentAtomText' } | { __typename: 'ComponentAtomTitle', id: string, text: string } | { __typename?: 'ComponentOrganismsHeader' } | { __typename?: 'ComponentOrganismsTitleDescriptionImage' } | { __typename?: 'ComponentTemplateDefaultPage' } | { __typename?: 'ComponentUtilsComponent' } | { __typename?: 'ComponentUtilsComponentsList' } | { __typename?: 'ComponentUtilsMetaRepeatableComponent' } | { __typename?: 'ComponentUtilsSeo' } | { __typename?: 'Error' } | null> | null } | null } | null } | null };

export const TitleFragmentDoc = `
    fragment title on ComponentAtomTitle {
  id
  text
  __typename
}
    `;
export const HeroOpenerFragmentDoc = `
    fragment heroOpener on ComponentOrganismsHeroOpener {
  id
  __typename
  title {
    text
  }
  description {
    text
  }
  bg_media {
    data {
      attributes {
        url
        previewUrl
        provider
        hash
        formats
        name
        height
        width
      }
    }
  }
}
    `;
export const TitleDescriptionImageFragmentDoc = `
    fragment titleDescriptionImage on ComponentOrganismsTitleDescriptionImage {
  __typename
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
          previewUrl
          provider
          hash
          formats
          name
          height
          width
        }
      }
    }
  }
  cta {
    label
    url
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
export const AuthorDocument = `
    query author($locale: I18NLocaleCode) {
  author(locale: $locale) {
    data {
      attributes {
        components {
          ...title
        }
      }
    }
  }
}
    ${TitleFragmentDoc}`;
export const useAuthorQuery = <
      TData = AuthorQuery,
      TError = unknown
    >(
        client: GraphQLClient,
        variables?: AuthorQueryVariables,
        options?: UseQueryOptions<AuthorQuery, TError, TData>,
        headers?: RequestInit['headers']
    ) =>
        useQuery<AuthorQuery, TError, TData>(
            variables === undefined ? ['author'] : ['author', variables],
            fetcher<AuthorQuery, AuthorQueryVariables>(client, AuthorDocument, variables, headers),
            options
        );
export const ContactsDocument = `
    query contacts($locale: I18NLocaleCode) {
  contact(locale: $locale) {
    data {
      attributes {
        components {
          ...title
        }
      }
    }
  }
}
    ${TitleFragmentDoc}`;
export const useContactsQuery = <
      TData = ContactsQuery,
      TError = unknown
    >(
        client: GraphQLClient,
        variables?: ContactsQueryVariables,
        options?: UseQueryOptions<ContactsQuery, TError, TData>,
        headers?: RequestInit['headers']
    ) =>
        useQuery<ContactsQuery, TError, TData>(
            variables === undefined ? ['contacts'] : ['contacts', variables],
            fetcher<ContactsQuery, ContactsQueryVariables>(client, ContactsDocument, variables, headers),
            options
        );
export const HomepageDocument = `
    query homepage($locale: I18NLocaleCode) {
  homepage(locale: $locale) {
    data {
      attributes {
        components {
          ...heroOpener
          ...titleDescriptionImage
        }
      }
    }
  }
}
    ${HeroOpenerFragmentDoc}
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
export const MainNavigationDocument = `
    query mainNavigation($locale: I18NLocaleCode) {
  renderNavigation(
    navigationIdOrSlug: "main-navigation"
    type: TREE
    locale: $locale
  ) {
    id
    path
    title
    type
    uiRouterKey
    page_id
    items {
      id
      title
      path
      items {
        id
        title
        path
      }
      parent {
        path
        id
        title
        type
        uiRouterKey
      }
    }
  }
}
    `;
export const useMainNavigationQuery = <
      TData = MainNavigationQuery,
      TError = unknown
    >(
        client: GraphQLClient,
        variables?: MainNavigationQueryVariables,
        options?: UseQueryOptions<MainNavigationQuery, TError, TData>,
        headers?: RequestInit['headers']
    ) =>
        useQuery<MainNavigationQuery, TError, TData>(
            variables === undefined ? ['mainNavigation'] : ['mainNavigation', variables],
            fetcher<MainNavigationQuery, MainNavigationQueryVariables>(client, MainNavigationDocument, variables, headers),
            options
        );
export const GetCurrentNavigationItemDocument = `
    query getCurrentNavigationItem($locale: I18NLocaleCode, $path: String) {
  renderNavigation(
    navigationIdOrSlug: "main-navigation"
    type: TREE
    locale: $locale
    path: $path
  ) {
    id
    page_id
    path
    title
    type
    uiRouterKey
  }
}
    `;
export const useGetCurrentNavigationItemQuery = <
      TData = GetCurrentNavigationItemQuery,
      TError = unknown
    >(
        client: GraphQLClient,
        variables?: GetCurrentNavigationItemQueryVariables,
        options?: UseQueryOptions<GetCurrentNavigationItemQuery, TError, TData>,
        headers?: RequestInit['headers']
    ) =>
        useQuery<GetCurrentNavigationItemQuery, TError, TData>(
            variables === undefined ? ['getCurrentNavigationItem'] : ['getCurrentNavigationItem', variables],
            fetcher<GetCurrentNavigationItemQuery, GetCurrentNavigationItemQueryVariables>(client, GetCurrentNavigationItemDocument, variables, headers),
            options
        );
export const WhyDocument = `
    query why($locale: I18NLocaleCode) {
  why(locale: $locale) {
    data {
      attributes {
        components {
          ...title
        }
      }
    }
  }
}
    ${TitleFragmentDoc}`;
export const useWhyQuery = <
      TData = WhyQuery,
      TError = unknown
    >(
        client: GraphQLClient,
        variables?: WhyQueryVariables,
        options?: UseQueryOptions<WhyQuery, TError, TData>,
        headers?: RequestInit['headers']
    ) =>
        useQuery<WhyQuery, TError, TData>(
            variables === undefined ? ['why'] : ['why', variables],
            fetcher<WhyQuery, WhyQueryVariables>(client, WhyDocument, variables, headers),
            options
        );