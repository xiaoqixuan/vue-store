// 将对象的值进行清空
export function clearObject(object:any) {
  for (const i in object) {
    object[i] = '';
  }
}
