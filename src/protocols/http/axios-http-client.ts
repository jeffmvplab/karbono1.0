import { CookiesKeysEnum, urlBackend } from '@/utilities/enums';
import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { HttpClient, HttpRequest, HttpResponse, UploadFileParams } from './http_utilities'
import Cookies from 'js-cookie'

export class AxiosHttpClient implements HttpClient {
  axiosInstance: AxiosInstance;
  constructor(
  ) {
    // console.log('Git Branch: ', process.env.GIT_BRANCH);

    this.axiosInstance = axios.create({
      baseURL: urlBackend,//BasesUrlsEnum.backend,
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        // 'Access-Control-Allow-Origin': '*',
        // 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplZmZAbXZwbGFiLmNvIiwic3ViIjoiZjMxNDhkZDItM2Q2Yi00ZmYwLTgzNzktZTFhN2ZkNDBjNzZmIiwiaWF0IjoxNjc1NjY4NjUwLCJleHAiOjE2NzU3MTE4NTAsImF1ZCI6Imh0dHBzOi8vZGF0YXN0b3JlY2NiLmNvbS8ifQ.uzZjasnMCbp8FrpfVXBSOSFVKBnOdpNKCunraofC9MM`,
        'Authorization': `Bearer ${Cookies.get(CookiesKeysEnum.token)}`,
      }
    });
  }

  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await this.axiosInstance.request({
        baseURL: data.baseUrl,
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: data.params,
      })
    } catch (error: any) {
      axiosResponse = error.response
    }
    // console.log('STATUSS:',axiosResponse)
    if (axiosResponse === undefined) {

      return {
        statusCode: 408,
        body: []
      }
    } else {
      return {
        statusCode: axiosResponse.status,
        body: axiosResponse.data
      }
    }

  }

  async uploadFile(params: UploadFileParams): Promise<HttpResponse> {
    // const axiosResponse = await this.axiosInstance.post(`${BasesUrlsEnum.backend}/${params.url}`,
    const axiosResponse = await this.axiosInstance.post(`${urlBackend}/${params.url}`,

      params.formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${Cookies.get(CookiesKeysEnum.token)}`,
        }
      })
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }

  async updateFile(params: UploadFileParams): Promise<HttpResponse> {
    const axiosResponse = await this.axiosInstance.put(`${urlBackend}/${params.url}`,
      params.formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${Cookies.get(CookiesKeysEnum.token)}`,
        }
      })
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }



  async multipartFile(params: UploadFileParams): Promise<HttpResponse> {

    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await this.axiosInstance.request({
        baseURL: urlBackend,

        // baseURL:urlBackend,
        url: params.url,
        method: params.method,
        data: params.formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${Cookies.get(CookiesKeysEnum.token)}`,
        },
      })
    } catch (error: any) {
      axiosResponse = error.response
    }

    if (axiosResponse === undefined) {

      return {
        statusCode: 408,
        body: []
      }
    } else {
      return {
        statusCode: axiosResponse.status,
        body: axiosResponse.data
      }
    }

  }


}