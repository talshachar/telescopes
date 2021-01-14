import { httpService } from './http-service';

export const messageService = {
  query,
  sendMessage,
  deleteMessage
}

function query() {
  return httpService.get('messages');
}

function sendMessage(message) {
  return httpService.post('messages', message)
}

function deleteMessage(message) {
  return httpService.post('messages', message)
}