const response = (success, message, error, data) => {
    // Check if success is a boolean, throw an error if not
  if (typeof success !== 'boolean') {
    throw new Error('The "success" property must be a boolean.');
  }
  
    return {
        success : success, 
        message : message, 
        error: error, 
        data : data
    }
}

module.exports = response; 