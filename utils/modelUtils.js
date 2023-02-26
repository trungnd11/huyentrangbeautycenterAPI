
export const removeFields = (obj, fields = ['_id', '__v']) => {
  for (let field of fields) {
    delete obj[field];
  }
  return obj;
}