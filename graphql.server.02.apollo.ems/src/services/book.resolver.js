/**
    Resolvers define how to fetch the types defined in your schema.
    This resolver retrieves books from the "books" array above.
 */
import { books } from '../models/book.dataset.js';
export const resolvers = {
    Query: {
        /**
         * @description alias of getBooks
         * @returns {Array<Object>} book list
         */
        books: () => books,

        /**
         * @description Fetch all books
         * @returns {Array<Object>} book list
         */
        getBooks: () => books,

        /**
         * @description Fetch a single book by ID
         * @param {Object} parent 
         * @param {Object} args 
         * @param {Number} args.id 
         * @returns {Object} book
         */
        getBookById: (parent, args) => {
            return books.find(book => book.id === args.id);
        }
    },
    Mutation: {
        /**
         * @description Add a new book
         * @param {Object} parent 
         * @param {Object} args 
         * @param {String} [args.id]
         * @param {String} args.title 
         * @param {String} args.author 
         * @param {Number} args.publishedYear 
         * @returns {Object} new Book
         */
        addBook: (parent, args) => {
            const newBook = {
                id: args.id || books.length + 1,
                title: args.title,
                author: args.author,
                publishedYear: args.publishedYear,
            };
            books.push(newBook);
            return newBook;
        },

        /**
         * @description Update an existing book
         * @param {Object} parent 
         * @param {Object} args 
         * @param {String} args.id 
         * @param {String} [args.title] 
         * @param {String} [args.author] 
         * @param {Number} [args.publishedYear] 
         * @returns {Object} book
         */
        updateBook: (parent, args) => {
            let book = books.find(book => book.id === args.id);
            if (!book) return null;

            if (args.title !== undefined) book.title = args.title;
            if (args.author !== undefined) book.author = args.author;
            if (args.publishedYear !== undefined) book.publishedYear = args.publishedYear;

            return book;
        },

        /**
         * @description Delete a book by ID
         * @param {Object} parent 
         * @param {Object} args 
         * @returns {Object} deleted book
         */
        deleteBook: (parent, args) => {
            let index = books.findIndex(book => book.id === args.id);
            if (index === -1) {
                return null;
            }
            let tmp = books[index];
            books.splice(index, 1);
            return tmp;
        }
    }
};