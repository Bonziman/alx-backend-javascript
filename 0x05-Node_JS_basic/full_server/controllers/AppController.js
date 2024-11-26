/**
 * Contains the miscellaneous route handlers.
 * @author Eloirdiwi Aymane <https://github.com/Bonziman>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
