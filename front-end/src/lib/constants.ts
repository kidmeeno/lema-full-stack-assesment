export const ENDPOINTS = {
  // API_BASE_DEV_URL: 'http://localhost:8080/api',
  API_BASE_DEV_URL: 'https://lema-full-stack-assesment.onrender.com/api',
  USER: {
    USERS: "/users",
  },
  POSTS: {
    USERS: "/users",
    GET_USER_POSTS: (id: string) => `/users/${id}/posts`,
    DELETE_POST: (id: string) => `/posts/${id}`,
    CREATE_POST: (id: string) => `/users/${id}/posts`,
  },
};

export const APP_KEYS = {};

export const MUTATION_KEYS = {
  POST: {
    DELETE_POST: "DELETE_POST",
    CREATE_POST: "CREATE_POST",
  },
};

export const QUERY_KEYS = {
  USER: {
    GET_ALL_USERS: "GET_ALL_USERS",
  },
  POSTS: {
    GET_ALL_USER_POSTS: "GET_ALL_USER_POSTS",
  },
};
