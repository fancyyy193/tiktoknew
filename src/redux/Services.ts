import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {SERVER_ADDRESS} from '../constants/SystemConstant';
import {SERVICE_APP_NAME} from '../constants/Name';
import {PATH_EXAM} from '../constants/Path';

export const services = createApi({
  reducerPath: SERVICE_APP_NAME,
  baseQuery: fetchBaseQuery({baseUrl: PATH_EXAM}),
  // tagTypes: ['Post', 'User'],
  keepUnusedDataFor: 30, // luu o cache 30s
  //   refetchOnMountOrArgChange: true, // khong luu du lieu o cache auto refresh
  //   refetchOnFocus: true,
  // refetchOnReconnect: true,
  endpoints: builder => ({
    // Mục Đích: Được sử dụng để định nghĩa một truy vấn, tức là một thao tác đọc dữ liệu từ máy chủ
    getDataByPage: builder.query<any, number>({
      query: page => `users?page=${page}`,
      //   keepUnusedDataFor: 5, // luu o cache 5s
      //   providesTags: (result, error, arg) =>
      //     result
      //       ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), 'Post']
      //       : ['Post'],
    }),
    // Mục Đích: Thay đổi dữ liệu
    addPost: builder.mutation<any, void>({
      query: body => ({
        url: 'post',
        method: 'POST',
        body,
      }),
      //   invalidatesTags: ['Post'],
    }),
  }),
});

export const {useGetDataByPageQuery} = services;
