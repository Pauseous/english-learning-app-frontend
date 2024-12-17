import request from './request'

export const getQuestion = () => {
  const response = request.get('http://127.0.0.1:4523/m1/5622523-5302091-default/question')
  return response
}