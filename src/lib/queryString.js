module.exports.queryString = (obj) =>
  Object.entries(obj)
    .map(([key, value]) => {
      if (typeof value === "object" && !Array.isArray(value)) {
        throw new Error("Por favor, cheque os parametros");
      }

      return `${key}=${value}`;
    })
    .join("&");
