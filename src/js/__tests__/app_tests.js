import ArrayBufferConverter, { getBuffer } from '../app';

test('testing ArrayBufferConverter methods', () => {
  const bufferConverter = new ArrayBufferConverter();
  const buffer = getBuffer();
  bufferConverter.load(buffer);
  const result = bufferConverter.toString();
  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
