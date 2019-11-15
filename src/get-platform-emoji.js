const emoji = require('node-emoji');

/**
 * List of emojis for available places to download a released package from
 */
module.exports = (name) => {
  switch (name.toLowerCase()) {
    case 'brew':
      return emoji.get('beer');
    case 'npm':
      return emoji.get('package');
    case 'yarn':
      return emoji.get('cat2');
    case 'docker':
      return emoji.get('whale');
    case 'dev':
      return emoji.get('chestnut');
    case 'staging':
      return emoji.get('seedling');
    case 'production':
      return emoji.get('deciduous_tree');
    case 'admin':
      return emoji.get('paperclip');
    default:
      return '';
  }
};
