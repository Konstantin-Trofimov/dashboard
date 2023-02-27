export const filterData = query => x => x[query.field].toLowerCase().includes(query.search) 

