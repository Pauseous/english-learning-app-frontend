import request from './request'

export const getQuestionList = (quantity: number) => {
  return request({
    url: '/questions',
    method: 'get',
    params: {
      quantity: quantity
    }
  })
}

export const getQuestionById = (id: number) => {
  return request({
    url: `/questions/${id}`,
    method: 'get'
  })
}
