import { httpService } from './http-service';

export const messageService = {
  query,
  write,
  remove
}

function query() {
  return httpService.get('messages');
}

function write(message) {
  return httpService.post('messages', message);
}

function remove(messageId) {
  return httpService.delete(`messages/${messageId}`);
}