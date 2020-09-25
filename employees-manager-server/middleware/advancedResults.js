const advancedResults = (model, populate) => async (req, res, next) => {
  
  //Get request query object
  const reqQuery = { ...req.query };

  //Remove certain fields from query object
  const removeFields = ['select', 'sort', 'page', 'limit'];
  removeFields.forEach(param => delete reqQuery[param])

  //Get a string representing the query object
  let queryString = JSON.stringify(reqQuery);

  //Check if query string contains certain parameters and put a '$' sign in front of them
  queryString = queryString.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
  let query = model.find(JSON.parse(queryString));

  //Check if query contains select and fields to select
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  //Check if query contains sort parameter and sortBy parameter
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy || '-createdAt');
  }

  //Use pagination on results
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || Number.MAX_SAFE_INTEGER;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments();

  //Skip to startIndex 
  query = query.skip(startIndex).limit(limit);

  //Populate data of foreign Documents on the database if populate is set on the query
  if (populate) {
    query = query.populate(populate);
  }

  const results = await query;
  const pagination = {};

  //Handle pagination
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    }
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    }
  }

  //Build de result object
  res.advancedResults = {
    success: true,
    count: results.length,
    pagination,
    data: results
  }

  next();
}

module.exports = advancedResults;